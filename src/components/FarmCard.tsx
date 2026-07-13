import { Card, Button, Dropdown } from 'antd';
import {
  EnvironmentOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import { CropTypeBadge } from '@app/components/CropTypeBadge';
import type { Farm } from '@app/types/farm';

interface FarmCardProps {
  farm: Farm;
  treeCount: number;
  onOpen: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function FarmCard({ farm, treeCount, onOpen, onEdit, onDelete }: FarmCardProps) {
  const { lang } = useI18n();
  const crop = getCrop(farm.cropType);
  const L = (th: string, en: string) => (lang === 'th' ? th : en);

  return (
    <Card
      hoverable
      onClick={onOpen}
      styles={{ body: { padding: 16 } }}
      style={{ borderLeft: `4px solid ${crop.accent}` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <span className="text-3xl">{crop.emoji}</span>
          <div>
            <div className="text-base font-semibold text-green-900">{farm.name}</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
              <EnvironmentOutlined />
              {farm.region} · {farm.areaRai} {L('ไร่', 'rai')}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <CropTypeBadge cropType={farm.cropType} />
              <span className="text-xs text-gray-500">
                {treeCount} {L('ต้น', 'trees')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
          <Dropdown
            trigger={['click']}
            menu={{
              items: [
                { key: 'edit', icon: <EditOutlined />, label: L('แก้ไข', 'Edit'), onClick: onEdit },
                {
                  key: 'delete',
                  icon: <DeleteOutlined />,
                  label: L('ลบ', 'Delete'),
                  danger: true,
                  onClick: onDelete,
                },
              ],
            }}
          >
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
          <RightOutlined className="text-gray-300" />
        </div>
      </div>
    </Card>
  );
}
