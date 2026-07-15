import { useEffect, useMemo, useState } from 'react';
import { Modal, Form, Input, InputNumber, Select, Upload, Button, Divider, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import { useVarietyStore } from '@app/store/varietyStore';
import type { CropType, Tree, TreeInput } from '@app/types/farm';

interface TreeFormModalProps {
  open: boolean;
  farmId: string;
  cropType: CropType;
  tree?: Tree | null;
  /** Suggested next hole number for new trees. */
  nextHole: number;
  onCancel: () => void;
  onSubmit: (input: TreeInput) => void;
}

const MAX_PHOTO_SIZE_MB = 5;

// Stable reference: reused whenever a crop type has no custom varieties yet,
// so the Zustand selector below never returns a "new" array on every render
// (which would otherwise cause an infinite re-render loop).
const EMPTY_VARIETIES: never[] = [];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export function TreeFormModal({
  open,
  farmId,
  cropType,
  tree,
  nextHole,
  onCancel,
  onSubmit,
}: TreeFormModalProps) {
  const { lang, t } = useI18n();
  const [form] = Form.useForm<Omit<TreeInput, 'farmId' | 'photoUrl'>>();
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [newVarietyName, setNewVarietyName] = useState('');

  const crop = getCrop(cropType);
  const isEdit = Boolean(tree);
  const L = (th: string, en: string) => (lang === 'th' ? th : en);

  // Select the whole map (stable unless the store actually changes), then
  // derive the per-crop list with useMemo so we never hand Zustand a
  // freshly-created array on every render.
  const customVarietiesMap = useVarietyStore((s) => s.customVarieties);
  const customVarieties = useMemo(
    () => customVarietiesMap[cropType] ?? EMPTY_VARIETIES,
    [customVarietiesMap, cropType],
  );
  const addVariety = useVarietyStore((s) => s.addVariety);

  const varietyOptions = useMemo(
    () => [
      ...crop.varieties.map((v) => ({ value: v.key, label: t(v.name) })),
      ...customVarieties.map((v) => ({ value: v.key, label: v.label })),
    ],
    [crop, customVarieties, t],
  );

  useEffect(() => {
    if (!open) return;
    if (tree) {
      form.setFieldsValue({ name: tree.name, holeNumber: tree.holeNumber, variety: tree.variety });
      setPhotoUrl(tree.photoUrl);
      setFileList(
        tree.photoUrl
          ? [{ uid: '-1', name: 'photo.jpg', status: 'done', url: tree.photoUrl }]
          : [],
      );
    } else {
      form.resetFields();
      form.setFieldsValue({ holeNumber: nextHole, variety: crop.varieties[0]?.key });
      setPhotoUrl(undefined);
      setFileList([]);
    }
    setNewVarietyName('');
  }, [open, tree, nextHole, crop, form]);

  const beforeUpload: UploadProps['beforeUpload'] = async (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error(L('อัปโหลดได้เฉพาะไฟล์รูปภาพ', 'You can only upload image files'));
      return Upload.LIST_IGNORE;
    }
    const isSmallEnough = file.size / 1024 / 1024 < MAX_PHOTO_SIZE_MB;
    if (!isSmallEnough) {
      message.error(
        L(
          `ขนาดไฟล์ต้องไม่เกิน ${MAX_PHOTO_SIZE_MB}MB`,
          `Image must be smaller than ${MAX_PHOTO_SIZE_MB}MB`,
        ),
      );
      return Upload.LIST_IGNORE;
    }

    const base64 = await fileToBase64(file);
    setPhotoUrl(base64);
    setFileList([{ uid: file.uid, name: file.name, status: 'done', url: base64 }]);
    // Returning false stops AntD from trying to auto-upload to a server endpoint
    // we don't have yet — we just keep the base64 string in local state instead.
    return false;
  };

  const handleRemovePhoto = () => {
    setPhotoUrl(undefined);
    setFileList([]);
    return true;
  };

  const handleAddVariety = () => {
    const name = newVarietyName.trim();
    if (!name) return;
    const created = addVariety(cropType, name);
    form.setFieldsValue({ variety: created.key });
    setNewVarietyName('');
  };

  return (
    <Modal
      open={open}
      title={isEdit ? L('แก้ไขต้นไม้', 'Edit tree') : L('เพิ่มต้นไม้', 'Add tree')}
      okText={isEdit ? L('บันทึก', 'Save') : L('เพิ่ม', 'Add')}
      cancelText={L('ยกเลิก', 'Cancel')}
      onCancel={onCancel}
      destroyOnHidden
      onOk={async () => {
        const values = await form.validateFields();
        onSubmit({ ...values, farmId, photoUrl });
      }}
    >
      <Form form={form} layout="vertical" requiredMark={false} className="pt-2">
        <Form.Item
          name="name"
          label={L('ชื่อต้นไม้', 'Tree name')}
          rules={[{ required: true, message: L('กรุณากรอกชื่อ', 'Please enter a name') }]}
        >
          <Input placeholder={L('เช่น ทุเรียนหมอนทอง #1', 'e.g. Durian Monthong #1')} />
        </Form.Item>

        <Form.Item
          name="holeNumber"
          label={L('หมายเลขหลุม', 'Hole number')}
          rules={[{ required: true, message: L('กรุณากรอกหมายเลขหลุม', 'Please enter a hole number') }]}
        >
          <InputNumber min={1} className="w-full" />
        </Form.Item>

        <Form.Item name="variety" label={L('พันธุ์', 'Variety')} rules={[{ required: true }]}>
          <Select
            options={varietyOptions}
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <div
                  style={{ display: 'flex', gap: 8, padding: '0 8px 8px' }}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <Input
                    placeholder={L('เพิ่มพันธุ์ใหม่', 'Add new variety')}
                    value={newVarietyName}
                    onChange={(e) => setNewVarietyName(e.target.value)}
                    onPressEnter={handleAddVariety}
                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={handleAddVariety}>
                    {L('เพิ่ม', 'Add')}
                  </Button>
                </div>
              </>
            )}
          />
        </Form.Item>

        <Form.Item label={L('รูปต้นไม้', 'Tree photo')}>
          <Upload
            listType="picture-card"
            fileList={fileList}
            beforeUpload={beforeUpload}
            onRemove={handleRemovePhoto}
            maxCount={1}
            accept="image/*"
          >
            {fileList.length >= 1 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>{L('อัปโหลด', 'Upload')}</div>
              </div>
            )}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}