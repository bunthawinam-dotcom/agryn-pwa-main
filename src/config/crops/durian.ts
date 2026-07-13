import type { CropConfig } from '@app/types/crop';

export const durian: CropConfig = {
  id: 'durian',
  name: { th: 'ทุเรียน', en: 'Durian' },
  emoji: '🍈',
  accent: '#ca8a04',
  tagline: {
    th: 'ข้อมูลอัจฉริยะสำหรับพืชมูลค่าสูง',
    en: 'Smart data for high-value crops',
  },
  varieties: [
    { key: 'monthong', name: { th: 'หมอนทอง', en: 'Monthong' } },
    { key: 'chanee', name: { th: 'ชะนี', en: 'Chanee' } },
    { key: 'kanyao', name: { th: 'ก้านยาว', en: 'Kanyao' } },
    { key: 'kradum', name: { th: 'กระดุม', en: 'Kradum' } },
    { key: 'musang-king', name: { th: 'มูซังคิง', en: 'Musang King' } },
  ],
  stages: [
    { key: 'vegetative', name: { th: 'ระยะเจริญเติบโต', en: 'Vegetative' }, durationDays: 120, icon: '🌱' },
    { key: 'flowering', name: { th: 'ระยะออกดอก', en: 'Flowering' }, durationDays: 45, icon: '🌸' },
    { key: 'fruit-set', name: { th: 'ระยะติดผล', en: 'Fruit set' }, durationDays: 40, icon: '🌼' },
    { key: 'fruiting', name: { th: 'ระยะพัฒนาผล', en: 'Fruit development' }, durationDays: 90, icon: '🍈' },
    { key: 'harvest', name: { th: 'ระยะเก็บเกี่ยว', en: 'Harvest' }, durationDays: 30, icon: '🧺' },
  ],
  metrics: [
    { key: 'soil-ph', name: { th: 'ค่า pH ดิน', en: 'Soil pH' }, unit: 'pH', optimal: [5.5, 6.5], icon: '🧪' },
    { key: 'soil-moisture', name: { th: 'ความชื้นดิน', en: 'Soil moisture' }, unit: '%', optimal: [60, 80], icon: '💧' },
    { key: 'temperature', name: { th: 'อุณหภูมิ', en: 'Temperature' }, unit: '°C', optimal: [24, 32], icon: '🌡️' },
    { key: 'rainfall', name: { th: 'ปริมาณฝน', en: 'Rainfall' }, unit: 'mm/wk', optimal: [25, 60], icon: '🌧️' },
  ],
  knowledge: [
    {
      id: 'durian-grading',
      category: { th: 'คู่มือการเกษตร', en: 'Farming guide' },
      emoji: '🍈',
      readMinutes: 5,
      title: { th: 'วิธีคัดเลือกทุเรียนพรีเมียม', en: 'How to grade premium durian' },
      excerpt: {
        th: 'ตัวชี้วัดสำคัญของทุเรียนคุณภาพ ตั้งแต่รูปทรงหนาม สีผิว การเคาะเสียง ไปจนถึงความสดของขั้ว',
        en: 'Key indicators of quality durian — thorn shape, skin colour, tap sound and stem freshness.',
      },
    },
    {
      id: 'durian-season',
      category: { th: 'ฤดูกาล', en: 'Seasonality' },
      emoji: '📅',
      readMinutes: 4,
      title: { th: 'ฤดูกาลทุเรียนในไทย — ปลูกและเก็บเกี่ยว', en: 'Durian season in Thailand' },
      excerpt: {
        th: 'ช่วงเวลาปลูก ตัวกระตุ้นการออกดอก และเดือนที่เก็บเกี่ยวสูงสุดในแต่ละภูมิภาค',
        en: 'Planting windows, flowering triggers and peak harvest months by region.',
      },
    },
    {
      id: 'durian-disease',
      category: { th: 'สุขภาพพืช', en: 'Plant health' },
      emoji: '🦠',
      readMinutes: 6,
      title: { th: 'โรคทุเรียนที่พบบ่อยและวิธีป้องกัน', en: 'Common durian diseases & prevention' },
      excerpt: {
        th: 'โรครากเน่าไฟทอปธอรา โรคใบไหม้ และผลเน่า — ระบุอาการแต่เนิ่นๆ และป้องกันอย่างมีประสิทธิภาพ',
        en: 'Phytophthora root rot, leaf blight and fruit rot — spot symptoms early and prevent them.',
      },
    },
    {
      id: 'durian-irrigation',
      category: { th: 'การชลประทาน', en: 'Irrigation' },
      emoji: '💧',
      readMinutes: 5,
      title: { th: 'เทคนิคการชลประทานอัจฉริยะสำหรับสวนทุเรียน', en: 'Smart irrigation for durian orchards' },
      excerpt: {
        th: 'ระบบน้ำหยด เซ็นเซอร์ความชื้นดิน และการให้น้ำแบบขาดดุลที่สวนชั้นนำใช้',
        en: 'Drip systems, soil-moisture sensors and deficit irrigation used by leading orchards.',
      },
    },
  ],
};
