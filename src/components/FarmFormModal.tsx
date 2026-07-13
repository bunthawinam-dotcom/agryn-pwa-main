import { useEffect } from 'react';
import { Modal, Form, Input, InputNumber, Select } from 'antd';
import { CROPS } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import type { Farm, FarmInput } from '@app/types/farm';

interface FarmFormModalProps {
  open: boolean;
  /** When set, the modal edits this farm; otherwise it creates a new one. */
  farm?: Farm | null;
  onCancel: () => void;
  onSubmit: (input: FarmInput) => void;
}

export function FarmFormModal({ open, farm, onCancel, onSubmit }: FarmFormModalProps) {
  const { lang, t } = useI18n();
  const [form] = Form.useForm<FarmInput>();
  const isEdit = Boolean(farm);

  useEffect(() => {
    if (!open) return;
    if (farm) {
      form.setFieldsValue({
        name: farm.name,
        cropType: farm.cropType,
        region: farm.region,
        areaRai: farm.areaRai,
      });
    } else {
      form.resetFields();
      form.setFieldsValue({ cropType: 'durian' });
    }
  }, [open, farm, form]);

  const L = (th: string, en: string) => (lang === 'th' ? th : en);

  return (
    <Modal
      open={open}
      title={isEdit ? L('แก้ไขสวน', 'Edit farm') : L('เพิ่มสวนใหม่', 'Add farm')}
      okText={isEdit ? L('บันทึก', 'Save') : L('เพิ่มสวน', 'Add farm')}
      cancelText={L('ยกเลิก', 'Cancel')}
      onCancel={onCancel}
      destroyOnHidden
      onOk={async () => {
        const values = await form.validateFields();
        onSubmit(values);
      }}
    >
      <Form form={form} layout="vertical" requiredMark={false} className="pt-2">
        <Form.Item
          name="name"
          label={L('ชื่อสวน', 'Farm name')}
          rules={[{ required: true, message: L('กรุณากรอกชื่อสวน', 'Please enter a name') }]}
        >
          <Input placeholder={L('เช่น สวนทุเรียนจันทบุรี', 'e.g. Chanthaburi durian orchard')} />
        </Form.Item>

        <Form.Item
          name="cropType"
          label={L('ชนิดพืช', 'Crop type')}
          rules={[{ required: true }]}
          extra={L('รองรับเฉพาะทุเรียนและมะละกอ', 'Durian and papaya only')}
        >
          <Select
            options={CROPS.map((crop) => ({
              value: crop.id,
              label: `${crop.emoji} ${t(crop.name)}`,
            }))}
          />
        </Form.Item>

        <Form.Item
          name="region"
          label={L('พื้นที่ / จังหวัด', 'Region / province')}
          rules={[{ required: true, message: L('กรุณากรอกพื้นที่', 'Please enter a region') }]}
        >
          <Input placeholder={L('เช่น จันทบุรี', 'e.g. Chanthaburi')} />
        </Form.Item>

        <Form.Item
          name="areaRai"
          label={L('พื้นที่ปลูก (ไร่)', 'Area (rai)')}
          rules={[{ required: true, message: L('กรุณากรอกพื้นที่', 'Please enter the area') }]}
        >
          <InputNumber min={0} step={0.5} className="w-full" placeholder="0" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
