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
      content: {
        th: `การคัดเกรดทุเรียนที่ดีเริ่มจากการสังเกตภายนอกก่อนตัด รูปทรงหนามควรกระจายสม่ำเสมอทั่วผล ปลายหนามแข็งและตั้งชัน ไม่บิดงอหรือหักง่าย สีผิวของเปลือกควรเป็นสีเขียวอมน้ำตาลสม่ำเสมอ ไม่มีรอยแมลงหรือรอยช้ำ

การเคาะฟังเสียงเป็นเทคนิคที่ชาวสวนใช้กันมานาน ทุเรียนที่แก่จัดพร้อมเก็บเกี่ยวเมื่อเคาะเปลือกแล้วจะให้เสียงทึบ ต่างจากผลอ่อนที่จะให้เสียงหนักแน่นกว่า ทั้งนี้ต้องอาศัยประสบการณ์ในการฟังเปรียบเทียบ

ก้านผลหรือขั้วทุเรียนเป็นอีกจุดสำคัญ ขั้วที่สดจะมีสีเขียวเข้ม แข็งแรง ไม่เหี่ยวแห้ง หากขั้วเริ่มมีรอยแตกเป็นวงรอบ (ปลิ้น) แสดงว่าผลใกล้แก่เต็มที่และพร้อมเก็บเกี่ยวในไม่ช้า

สำหรับการส่งออกหรือขายในราคาพรีเมียม ควรตรวจสอบน้ำหนักต่อผลให้อยู่ในเกณฑ์มาตรฐานของแต่ละพันธุ์ และหลีกเลี่ยงผลที่มีรูปทรงบิดเบี้ยวหรือพูไม่สมบูรณ์ เพราะจะส่งผลต่อราคาขายโดยตรง`,
        en: `Good durian grading starts with visual inspection before harvest. Thorns should be evenly spaced across the fruit, firm and upright rather than bent or brittle. The skin should show a consistent greenish-brown colour, free of insect marks or bruising.

Tapping the shell is a technique growers have used for generations. A fully mature durian ready for harvest gives a duller, hollower sound when tapped, compared to the denser sound of an unripe fruit — this takes practice to judge by comparison.

The stem is another key indicator. A fresh stem is dark green and firm, not withered. When the stem begins to show a circular crack near the base ("plin"), it signals the fruit is close to full maturity and ready for harvest soon.

For export or premium pricing, check that the weight per fruit falls within the standard range for its variety, and avoid fruit with an irregular shape or underdeveloped lobes, as these directly affect the selling price.`,
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
      content: {
        th: `ทุเรียนในประเทศไทยออกดอกและติดผลตามฤดูกาลที่แตกต่างกันไปตามภูมิภาค โดยทั่วไปช่วงที่เหมาะสมสำหรับการปลูกต้นกล้าคือต้นฤดูฝน (พฤษภาคม–มิถุนายน) เพื่อให้รากตั้งตัวได้ดีก่อนเข้าสู่ฤดูแล้ง

การออกดอกมักถูกกระตุ้นด้วยสภาพอากาศแล้งสั้นๆ ตามด้วยฝนตกหรือการให้น้ำ ชาวสวนภาคตะวันออก (จันทบุรี ระยอง ตราด) มักเห็นดอกทุเรียนบานช่วงเดือนธันวาคม–มกราคม และเก็บเกี่ยวผลผลิตสูงสุดในเดือนเมษายน–พฤษภาคม

ภาคใต้ตอนล่าง เช่น ชุมพร นครศรีธรรมราช มักมีฤดูกาลเลื่อนช้ากว่าภาคตะวันออกประมาณ 1–2 เดือน เนื่องจากสภาพอากาศและปริมาณฝนที่แตกต่างกัน ทำให้ผลผลิตทยอยออกสู่ตลาดต่อเนื่องยาวนานขึ้นในภาพรวมของประเทศ

การวางแผนดูแลตามช่วงฤดูกาลจึงสำคัญมาก โดยเฉพาะการงดให้น้ำมากเกินไปช่วงก่อนออกดอก และเพิ่มความถี่ในการให้น้ำเมื่อเข้าสู่ระยะพัฒนาผล เพื่อให้ได้ผลผลิตที่มีคุณภาพสม่ำเสมอ`,
        en: `Durian flowering and fruiting in Thailand follows regional seasonal patterns. Generally, the best window to plant new saplings is early in the rainy season (May–June), giving the roots time to establish before the dry season arrives.

Flowering is typically triggered by a short dry spell followed by rain or irrigation. Growers in the eastern region (Chanthaburi, Rayong, Trat) usually see flowers bloom around December–January, with peak harvest in April–May.

The lower south, such as Chumphon and Nakhon Si Thammarat, tends to run 1–2 months behind the eastern region due to different rainfall and climate patterns — which helps spread the national harvest over a longer period.

Planning care around these seasonal windows matters a lot: avoid overwatering right before flowering, and increase watering frequency once fruit development begins, to achieve consistent fruit quality.`,
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
      content: {
        th: `โรครากเน่าโคนเน่าจากเชื้อไฟทอปธอรา (Phytophthora) เป็นโรคที่สร้างความเสียหายรุนแรงที่สุดในสวนทุเรียน อาการเริ่มจากใบเหลืองซีดผิดปกติ เปลือกบริเวณโคนต้นมีรอยช้ำสีน้ำตาลเข้มและมีของเหลวไหลซึม หากปล่อยไว้จะลุกลามจนต้นตายได้

การป้องกันที่ดีที่สุดคือการจัดการระบายน้ำในแปลงปลูกให้ดี ไม่ให้น้ำขังบริเวณโคนต้น เพราะเชื้อราชนิดนี้แพร่กระจายได้ดีในสภาพดินชื้นแฉะ ควรตรวจสอบแปลงหลังฝนตกหนักเป็นประจำ

โรคใบไหม้ มักเกิดในช่วงอากาศชื้นสูงต่อเนื่อง สังเกตได้จากขอบใบมีรอยไหม้สีน้ำตาลลามเข้าสู่กลางใบ หากพบควรตัดแต่งกิ่งที่เป็นโรคออกทันทีเพื่อลดการแพร่กระจาย และเพิ่มการระบายอากาศในทรงพุ่ม

ผลเน่าเป็นปัญหาที่พบบ่อยในช่วงใกล้เก็บเกี่ยว มักเกิดจากเชื้อราที่เข้าทางรอยแผลหรือรอยแมลงกัดกิน การห่อผลด้วยถุงตาข่ายก่อนเก็บเกี่ยวประมาณ 2–3 สัปดาห์ช่วยลดความเสียหายได้อย่างมีนัยสำคัญ

โดยรวมแล้ว การตรวจแปลงอย่างสม่ำเสมอเพื่อพบอาการตั้งแต่ระยะเริ่มต้น คือหัวใจสำคัญของการป้องกันโรคในสวนทุเรียน มากกว่าการรอให้อาการรุนแรงแล้วจึงแก้ไข`,
        en: `Phytophthora root and trunk rot is the most destructive disease in durian orchards. Early symptoms include abnormal leaf yellowing, dark brown lesions with oozing sap at the trunk base. Left untreated, it can spread and kill the tree.

The best prevention is proper drainage management — avoid water pooling around the trunk base, since this fungus thrives in waterlogged soil. Inspect the orchard regularly after heavy rain.

Leaf blight tends to appear during prolonged humid conditions, showing brown scorching along leaf edges that spreads toward the center. Infected branches should be pruned immediately to limit spread, and canopy airflow should be improved.

Fruit rot is a common problem near harvest time, usually caused by fungi entering through wounds or insect damage. Bagging fruit with mesh netting 2–3 weeks before harvest significantly reduces this damage.

Overall, regular field inspection to catch symptoms early is the cornerstone of disease prevention in durian orchards — far more effective than waiting until symptoms become severe.`,
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
      content: {
        th: `ระบบน้ำหยด (Drip irrigation) เป็นที่นิยมมากขึ้นในสวนทุเรียนสมัยใหม่ เพราะให้น้ำตรงจุดบริเวณรากฝอยโดยตรง ลดการสูญเสียน้ำจากการระเหยเมื่อเทียบกับการรดน้ำแบบสปริงเกอร์ทั่วไป และช่วยลดปัญหาความชื้นสะสมที่ผิวดินซึ่งเป็นแหล่งเพาะเชื้อรา

การติดตั้งเซ็นเซอร์วัดความชื้นดินช่วยให้ชาวสวนให้น้ำได้แม่นยำตามความต้องการจริงของต้นไม้ แทนที่จะให้น้ำตามตารางเวลาคงที่ ซึ่งอาจมากเกินไปหรือน้อยเกินไปในบางช่วง

เทคนิคการให้น้ำแบบขาดดุล (Deficit irrigation) คือการลดปริมาณน้ำลงอย่างมีการควบคุมในช่วงก่อนออกดอก ประมาณ 2–3 สัปดาห์ เพื่อกระตุ้นให้ต้นทุเรียนออกดอกพร้อมกันมากขึ้น ก่อนกลับมาให้น้ำตามปกติเมื่อดอกเริ่มบาน

ในช่วงพัฒนาผล ควรให้น้ำสม่ำเสมอและเพียงพอ เพราะการขาดน้ำอย่างกะทันหันในช่วงนี้อาจทำให้เนื้อทุเรียนแฉะ หรือผลแตกได้ง่าย การให้น้ำที่สม่ำเสมอจึงสำคัญไม่แพ้ปริมาณน้ำที่ให้ในแต่ละครั้ง`,
        en: `Drip irrigation is increasingly popular in modern durian orchards because it delivers water directly to the root zone, reducing evaporation loss compared to conventional sprinklers, and helps limit surface moisture buildup that can harbour fungal disease.

Installing soil-moisture sensors lets growers water based on the tree's actual need rather than a fixed schedule, avoiding both over- and under-watering at different growth stages.

Deficit irrigation is a controlled technique of reducing water for about 2–3 weeks before flowering, encouraging more synchronized blooming across the tree, before returning to normal watering once flowers begin to open.

During fruit development, watering should be steady and sufficient — a sudden water shortage at this stage can cause soggy flesh or fruit splitting. Consistency in watering matters just as much as the total volume applied each time.`,
      },
    },
  ],
};