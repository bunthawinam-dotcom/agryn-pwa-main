import { Card, Button, Dropdown } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import type { CropType, Tree } from '@app/types/farm';

interface TreeCardProps {
  tree: Tree;
  cropType: CropType;
  onEdit: () => void;
  onDelete: () => void;
}

/** Mirrors agryn-mb TreeCard: hole-number avatar, name, variety. */
export function TreeCard({ tree, cropType, onEdit, onDelete }: TreeCardProps) {
  const { lang, t } = useI18n();
  const crop = getCrop(cropType);
  const variety = crop.varieties.find((v) => v.key === tree.variety);
  const varietyLabel = variety ? t(variety.name) : tree.variety;
  const L = (th: string, en: string) => (lang === 'th' ? th : en);

  return (
    <Card size="small" styles={{ body: { padding: 12 } }}>
      <div className="flex items-center gap-3">
        <div
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-bold text-white"
          style={{ background: crop.accent }}
        >
          {tree.holeNumber}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate font-medium text-green-900">{tree.name}</div>
          <div className="text-xs text-gray-400">
            {L('พันธุ์', 'Variety')}: {varietyLabel}
          </div>
        </div>
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
      </div>
    </Card>
  );
}
