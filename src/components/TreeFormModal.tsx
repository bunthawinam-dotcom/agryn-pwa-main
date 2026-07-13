import { useEffect } from 'react';
import { Modal, Form, Input, InputNumber, Select } from 'antd';
import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
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
  const [form] = Form.useForm<Omit<TreeInput, 'farmId'>>();
  const crop = getCrop(cropType);
  const isEdit = Boolean(tree);
  const L = (th: string, en: string) => (lang === 'th' ? th : en);

  useEffect(() => {
    if (!open) return;
    if (tree) {
      form.setFieldsValue({ name: tree.name, holeNumber: tree.holeNumber, variety: tree.variety });
    } else {
      form.resetFields();
      form.setFieldsValue({ holeNumber: nextHole, variety: crop.varieties[0]?.key });
    }
  }, [open, tree, nextHole, crop, form]);

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
        onSubmit({ ...values, farmId });
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

        <Form.Item
          name="variety"
          label={L('พันธุ์', 'Variety')}
          rules={[{ required: true }]}
        >
          <Select
            options={crop.varieties.map((v) => ({ value: v.key, label: t(v.name) }))}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
