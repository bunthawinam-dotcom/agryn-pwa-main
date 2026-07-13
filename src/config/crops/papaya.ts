import type { CropConfig } from '@app/types/crop';

export const papaya: CropConfig = {
  id: 'papaya',
  name: { th: 'มะละกอ', en: 'Papaya' },
  emoji: '🥭',
  accent: '#ea580c',
  tagline: {
    th: 'พืชผลเร็ว รายได้ต่อเนื่องตลอดปี',
    en: 'Fast-cycle crop with year-round income',
  },
  varieties: [
    { key: 'holland', name: { th: 'ฮอลแลนด์', en: 'Holland' } },
    { key: 'red-lady', name: { th: 'เรดเลดี้', en: 'Red Lady' } },
    { key: 'khaek-dam', name: { th: 'แขกดำ', en: 'Khaek Dam' } },
    { key: 'khaek-nuan', name: { th: 'แขกนวล', en: 'Khaek Nuan' } },
    { key: 'sai-nam-phueng', name: { th: 'ไซน้ำผึ้ง', en: 'Sai Nam Phueng' } },
  ],
  stages: [
    { key: 'seedling', name: { th: 'ระยะกล้า', en: 'Seedling' }, durationDays: 45, icon: '🌱' },
    { key: 'vegetative', name: { th: 'ระยะเจริญเติบโต', en: 'Vegetative' }, durationDays: 90, icon: '🌿' },
    { key: 'flowering', name: { th: 'ระยะออกดอก', en: 'Flowering' }, durationDays: 30, icon: '🌸' },
    { key: 'fruiting', name: { th: 'ระยะติดผล', en: 'Fruiting' }, durationDays: 120, icon: '🥭' },
    { key: 'harvest', name: { th: 'ระยะเก็บเกี่ยว', en: 'Harvest' }, durationDays: 200, icon: '🧺' },
  ],
  metrics: [
    { key: 'soil-ph', name: { th: 'ค่า pH ดิน', en: 'Soil pH' }, unit: 'pH', optimal: [6.0, 6.5], icon: '🧪' },
    { key: 'soil-moisture', name: { th: 'ความชื้นดิน', en: 'Soil moisture' }, unit: '%', optimal: [55, 70], icon: '💧' },
    { key: 'temperature', name: { th: 'อุณหภูมิ', en: 'Temperature' }, unit: '°C', optimal: [21, 33], icon: '🌡️' },
    { key: 'rainfall', name: { th: 'ปริมาณฝน', en: 'Rainfall' }, unit: 'mm/wk', optimal: [20, 45], icon: '🌧️' },
  ],
  knowledge: [
    {
      id: 'papaya-varieties',
      category: { th: 'พันธุ์มะละกอ', en: 'Varieties' },
      emoji: '🏷️',
      readMinutes: 4,
      title: { th: 'รู้จักพันธุ์มะละกอ: แขกดำ ฮอลแลนด์ และเรดเลดี้', en: 'Papaya varieties: Khaek Dam, Holland & Red Lady' },
      excerpt: {
        th: 'ลักษณะเฉพาะ ความต้องการตลาด และข้อกำหนดการปลูกของแต่ละพันธุ์ยอดนิยม',
        en: 'Traits, market demand and growing needs of the most popular papaya varieties.',
      },
    },
    {
      id: 'papaya-ringspot',
      category: { th: 'สุขภาพพืช', en: 'Plant health' },
      emoji: '🦠',
      readMinutes: 6,
      title: { th: 'ไวรัสใบด่างวงแหวนมะละกอและการจัดการ', en: 'Papaya ringspot virus & management' },
      excerpt: {
        th: 'PRSV เป็นภัยคุกคามอันดับต้นๆ — เรียนรู้การป้องกันเพลี้ยพาหะและการจัดการแปลง',
        en: 'PRSV is a top threat — learn aphid-vector control and field sanitation.',
      },
    },
    {
      id: 'papaya-yield',
      category: { th: 'ผลผลิต', en: 'Yield' },
      emoji: '📈',
      readMinutes: 5,
      title: { th: 'เพิ่มผลผลิตมะละกอตลอดปี', en: 'Maximising year-round papaya yield' },
      excerpt: {
        th: 'มะละกอให้ผลต่อเนื่อง การจัดการธาตุอาหารและน้ำสม่ำเสมอคือกุญแจสำคัญ',
        en: 'Papaya fruits continuously — consistent nutrition and water are the key levers.',
      },
    },
    {
      id: 'papaya-market',
      category: { th: 'การตลาด', en: 'Market' },
      emoji: '🚛',
      readMinutes: 5,
      title: { th: 'ตลาดมะละกอ: บริโภคสดและแปรรูป', en: 'Papaya markets: fresh & processing' },
      excerpt: {
        th: 'ตั้งแต่มะละกอดิบสำหรับส้มตำ ถึงมะละกอสุกส่งออก เข้าใจช่องทางและจังหวะราคา',
        en: 'From green papaya for som tam to ripe export fruit — channels and price timing.',
      },
    },
  ],
};
