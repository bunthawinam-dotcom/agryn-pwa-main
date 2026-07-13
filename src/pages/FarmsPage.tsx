import { useState } from 'react';
import { Button, Empty, Modal, Row, Col, Statistic, Card } from 'antd';
import { PlusOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useFarmStore } from '@app/store/farmStore';
import { useI18n } from '@app/hooks/useI18n';
import { FarmCard } from '@app/components/FarmCard';
import { FarmFormModal } from '@app/components/FarmFormModal';
import type { Farm, FarmInput } from '@app/types/farm';

export function FarmsPage() {
  const navigate = useNavigate();
  const { lang } = useI18n();
  const L = (th: string, en: string) => (lang === 'th' ? th : en);

  const farms = useFarmStore((s) => s.farms);
  const trees = useFarmStore((s) => s.trees);
  const addFarm = useFarmStore((s) => s.addFarm);
  const updateFarm = useFarmStore((s) => s.updateFarm);
  const removeFarm = useFarmStore((s) => s.removeFarm);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Farm | null>(null);

  const treeCount = (farmId: string) => trees.filter((t) => t.farmId === farmId).length;
  const totalRai = farms.reduce((s, f) => s + f.areaRai, 0);

  const openAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };
  const openEdit = (farm: Farm) => {
    setEditing(farm);
    setModalOpen(true);
  };

  const handleSubmit = (input: FarmInput) => {
    if (editing) updateFarm(editing.id, input);
    else addFarm(input);
    setModalOpen(false);
    setEditing(null);
  };

  const confirmDelete = (farm: Farm) => {
    Modal.confirm({
      title: L('ลบสวนนี้?', 'Delete this farm?'),
      icon: <ExclamationCircleFilled />,
      content: L(
        `“${farm.name}” และต้นไม้ทั้งหมดในสวนจะถูกลบ`,
        `"${farm.name}" and all its trees will be removed.`,
      ),
      okText: L('ลบ', 'Delete'),
      okType: 'danger',
      cancelText: L('ยกเลิก', 'Cancel'),
      onOk: () => removeFarm(farm.id),
    });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="m-0 text-2xl font-bold text-green-900">
            {L('สวนของฉัน', 'My Farms')}
          </h1>
          <p className="m-0 text-sm text-gray-400">
            {L('จัดการสวนและต้นไม้ของคุณ', 'Manage your farms and trees')}
          </p>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={openAdd}>
          {L('เพิ่มสวน', 'Add farm')}
        </Button>
      </div>

      {farms.length > 0 && (
        <Row gutter={[12, 12]} className="mb-4">
          <Col xs={8}>
            <Card size="small">
              <Statistic title={L('สวน', 'Farms')} value={farms.length} />
            </Card>
          </Col>
          <Col xs={8}>
            <Card size="small">
              <Statistic title={L('พื้นที่รวม (ไร่)', 'Area (rai)')} value={Math.round(totalRai * 10) / 10} />
            </Card>
          </Col>
          <Col xs={8}>
            <Card size="small">
              <Statistic title={L('ต้นไม้', 'Trees')} value={trees.length} />
            </Card>
          </Col>
        </Row>
      )}

      {farms.length === 0 ? (
        <Empty
          className="mt-16"
          description={L('ยังไม่มีสวน เพิ่มสวนแรกของคุณ!', 'No farms yet. Add your first farm!')}
        >
          <Button type="primary" icon={<PlusOutlined />} onClick={openAdd}>
            {L('เพิ่มสวน', 'Add farm')}
          </Button>
        </Empty>
      ) : (
        <Row gutter={[12, 12]}>
          {farms.map((farm) => (
            <Col xs={24} sm={12} key={farm.id}>
              <FarmCard
                farm={farm}
                treeCount={treeCount(farm.id)}
                onOpen={() => navigate(`/farms/${farm.id}`)}
                onEdit={() => openEdit(farm)}
                onDelete={() => confirmDelete(farm)}
              />
            </Col>
          ))}
        </Row>
      )}

      <FarmFormModal
        open={modalOpen}
        farm={editing}
        onCancel={() => {
          setModalOpen(false);
          setEditing(null);
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
