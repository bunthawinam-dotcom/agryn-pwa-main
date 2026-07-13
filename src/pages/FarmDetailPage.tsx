import { useMemo, useState } from 'react';
import { Button, Empty, Modal, Tabs, Card, Row, Col, Result } from 'antd';
import {
  PlusOutlined,
  ArrowLeftOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useFarmStore } from '@app/store/farmStore';
import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import { CropHero } from '@app/components/CropHero';
import { CropTypeBadge } from '@app/components/CropTypeBadge';
import { MetricSnapshot } from '@app/components/MetricSnapshot';
import { TreeCard } from '@app/components/TreeCard';
import { TreeFormModal } from '@app/components/TreeFormModal';
import type { Tree, TreeInput } from '@app/types/farm';

export function FarmDetailPage() {
  const { farmId = '' } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useI18n();
  const L = (th: string, en: string) => (lang === 'th' ? th : en);

  const farm = useFarmStore((s) => s.farms.find((f) => f.id === farmId));
  const trees = useFarmStore((s) => s.trees);
  const addTree = useFarmStore((s) => s.addTree);
  const updateTree = useFarmStore((s) => s.updateTree);
  const removeTree = useFarmStore((s) => s.removeTree);

  const farmTrees = useMemo(
    () => trees.filter((t) => t.farmId === farmId).sort((a, b) => a.holeNumber - b.holeNumber),
    [trees, farmId],
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Tree | null>(null);

  if (!farm) {
    return (
      <Result
        status="404"
        title={L('ไม่พบสวน', 'Farm not found')}
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            {L('กลับหน้าสวน', 'Back to farms')}
          </Button>
        }
      />
    );
  }

  const crop = getCrop(farm.cropType);
  const nextHole = farmTrees.reduce((max, t) => Math.max(max, t.holeNumber), 0) + 1;

  const openAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };
  const openEdit = (tree: Tree) => {
    setEditing(tree);
    setModalOpen(true);
  };
  const handleSubmit = (input: TreeInput) => {
    if (editing) updateTree(editing.id, input);
    else addTree(input);
    setModalOpen(false);
    setEditing(null);
  };
  const confirmDelete = (tree: Tree) => {
    Modal.confirm({
      title: L('ลบต้นไม้นี้?', 'Delete this tree?'),
      icon: <ExclamationCircleFilled />,
      content: `“${tree.name}”`,
      okText: L('ลบ', 'Delete'),
      okType: 'danger',
      cancelText: L('ยกเลิก', 'Cancel'),
      onOk: () => removeTree(tree.id),
    });
  };

  const treesTab = (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {farmTrees.length} {L('ต้น', 'trees')}
        </span>
        <Button type="primary" size="small" icon={<PlusOutlined />} onClick={openAdd}>
          {L('เพิ่มต้นไม้', 'Add tree')}
        </Button>
      </div>
      {farmTrees.length === 0 ? (
        <Empty description={L('ยังไม่มีต้นไม้ เพิ่มต้นแรก!', 'No trees yet. Add your first!')}>
          <Button type="primary" icon={<PlusOutlined />} onClick={openAdd}>
            {L('เพิ่มต้นไม้', 'Add tree')}
          </Button>
        </Empty>
      ) : (
        <Row gutter={[10, 10]}>
          {farmTrees.map((tree) => (
            <Col xs={24} sm={12} key={tree.id}>
              <TreeCard
                tree={tree}
                cropType={farm.cropType}
                onEdit={() => openEdit(tree)}
                onDelete={() => confirmDelete(tree)}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );

  const overviewTab = (
    <div>
      <Card size="small" className="mb-4" title={L('วงจรการเจริญเติบโต', 'Growth cycle')}>
        <div className="flex flex-wrap gap-2">
          {crop.stages.map((stage) => (
            <div
              key={stage.key}
              className="flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-sm"
            >
              <span>{stage.icon}</span>
              <span className="font-medium text-green-800">{t(stage.name)}</span>
              <span className="text-xs text-gray-400">{stage.durationDays}d</span>
            </div>
          ))}
        </div>
      </Card>
      <MetricSnapshot cropType={farm.cropType} seedKey={farm.id} />
    </div>
  );

  return (
    <div>
      <Button type="text" icon={<ArrowLeftOutlined />} className="mb-2 px-0" onClick={() => navigate('/')}>
        {L('สวนทั้งหมด', 'All farms')}
      </Button>

      <CropHero
        cropId={farm.cropType}
        title={farm.name}
        subtitle={`${farm.region} · ${farm.areaRai} ${L('ไร่', 'rai')}`}
      />

      <div className="mb-4">
        <CropTypeBadge cropType={farm.cropType} />
      </div>

      <Tabs
        items={[
          { key: 'trees', label: L('ต้นไม้', 'Trees'), children: treesTab },
          { key: 'overview', label: L('ภาพรวม', 'Overview'), children: overviewTab },
        ]}
      />

      <TreeFormModal
        open={modalOpen}
        farmId={farm.id}
        cropType={farm.cropType}
        tree={editing}
        nextHole={nextHole}
        onCancel={() => {
          setModalOpen(false);
          setEditing(null);
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
