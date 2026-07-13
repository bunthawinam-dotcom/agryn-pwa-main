import { Card, Col, Row, Skeleton, Tag } from 'antd';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip as RTooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { getCrop } from '@app/config/crops';
import { useI18n } from '@app/hooks/useI18n';
import { useMetricHistory } from '@app/api/queries';
import type { CropType } from '@app/types/farm';

function statusForValue(value: number, optimal: [number, number]) {
  const [min, max] = optimal;
  if (value < min) return { color: 'blue', th: 'ต่ำ', en: 'Low' };
  if (value > max) return { color: 'red', th: 'สูง', en: 'High' };
  return { color: 'green', th: 'เหมาะสม', en: 'Optimal' };
}

/** Sensor snapshot (soil/weather) for a farm's crop type. */
export function MetricSnapshot({ cropType, seedKey }: { cropType: CropType; seedKey: string }) {
  const { lang, t } = useI18n();
  const crop = getCrop(cropType);
  const { data: history, isLoading } = useMetricHistory(cropType, seedKey);

  return (
    <Row gutter={[12, 12]}>
      {crop.metrics.map((metric) => {
        const series = history?.find((s) => s.key === metric.key);
        const latest = series?.points.at(-1)?.value ?? 0;
        const status = statusForValue(latest, metric.optimal);
        return (
          <Col xs={24} sm={12} key={metric.key}>
            <Card size="small">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{metric.icon}</span>
                  <span className="font-medium">{t(metric.name)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">
                    {latest}
                    <span className="ml-1 text-xs text-gray-400">{metric.unit}</span>
                  </span>
                  <Tag color={status.color}>{lang === 'th' ? status.th : status.en}</Tag>
                </div>
              </div>
              {isLoading || !series ? (
                <Skeleton.Node active style={{ width: '100%', height: 100 }} />
              ) : (
                <ResponsiveContainer width="100%" height={100}>
                  <AreaChart data={series.points} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                    <defs>
                      <linearGradient id={`g-${seedKey}-${metric.key}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={crop.accent} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={crop.accent} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" hide />
                    <YAxis domain={['dataMin - 2', 'dataMax + 2']} tick={{ fontSize: 10 }} width={32} />
                    <RTooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={crop.accent}
                      strokeWidth={2}
                      fill={`url(#g-${seedKey}-${metric.key})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
