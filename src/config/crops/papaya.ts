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
      content: {
        th: `พันธุ์ฮอลแลนด์เป็นที่นิยมสูงสุดในตลาดผลไม้บริโภคสด เนื้อสีส้มแดง หวานกรอบ เปลือกหนาทนต่อการขนส่ง เหมาะสำหรับปลูกเพื่อขายในซูเปอร์มาร์เก็ตและตลาดพรีเมียม แต่ให้ผลผลิตต่อต้นน้อยกว่าพันธุ์พื้นบ้านเล็กน้อย

พันธุ์เรดเลดี้ เป็นลูกผสมที่ต้านทานโรคได้ดี ต้นเตี้ย เก็บเกี่ยวง่าย ผลทรงยาวรี เนื้อสีส้มเข้ม รสหวานสม่ำเสมอ เป็นที่นิยมมากขึ้นเรื่อยๆ ในกลุ่มเกษตรกรรุ่นใหม่เพราะดูแลง่ายและให้ผลผลิตต่อเนื่อง

พันธุ์แขกดำและแขกนวล เป็นพันธุ์พื้นบ้านดั้งเดิมของไทย นิยมใช้ปลูกเพื่อเก็บผลดิบทำส้มตำเป็นหลัก เนื้อแน่น กรอบ มีเส้นใยน้อย ทนทานต่อสภาพอากาศร้อนชื้นได้ดีกว่าพันธุ์นำเข้า

การเลือกพันธุ์ปลูกควรพิจารณาจากตลาดปลายทางเป็นหลัก หากเน้นขายผลสุกบริโภคสดควรเลือกฮอลแลนด์หรือเรดเลดี้ แต่หากเน้นตลาดผลดิบสำหรับร้านส้มตำหรือแปรรูป พันธุ์แขกดำ/แขกนวลจะให้ผลตอบแทนที่คุ้มค่ากว่า`,
        en: `Holland is the most popular variety for the fresh-fruit market. Its orange-red flesh is sweet and crisp, with a thick skin that withstands transport well — ideal for supermarkets and premium markets, though yield per tree is slightly lower than local varieties.

Red Lady is a hybrid known for strong disease resistance, a short trunk that makes harvesting easy, and an elongated fruit shape with deep orange, consistently sweet flesh. It's increasingly popular among younger growers for being low-maintenance with continuous yield.

Khaek Dam and Khaek Nuan are traditional Thai varieties, mainly grown for green fruit used in som tam. Their flesh is firm, crisp, with less fibre, and they tolerate Thailand's hot, humid climate better than imported varieties.

Variety choice should be driven by the target market: for ripe fresh-fruit sales, Holland or Red Lady are the better fit; for green-fruit markets like som tam vendors or processing, Khaek Dam/Khaek Nuan tend to give better returns.`,
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
      content: {
        th: `ไวรัสใบด่างวงแหวนมะละกอ (Papaya Ringspot Virus - PRSV) เป็นโรคที่สร้างความเสียหายรุนแรงที่สุดในสวนมะละกอทั่วประเทศไทย อาการเริ่มจากใบอ่อนมีจุดด่างเหลืองสลับเขียว ใบบิดเบี้ยวผิดรูป และลามไปที่ผลจนเกิดเป็นวงแหวนสีเขียวเข้มบนผิวผล ทำให้ผลผลิตขายไม่ได้ราคา

เชื้อไวรัสนี้แพร่กระจายผ่านเพลี้ยอ่อน (aphid) เป็นหลัก โดยเพลี้ยจะดูดกินน้ำเลี้ยงจากต้นที่ติดเชื้อแล้วบินไปแพร่เชื้อต่อยังต้นข้างเคียงอย่างรวดเร็ว การควบคุมเพลี้ยพาหะจึงเป็นหัวใจสำคัญของการป้องกัน มากกว่าการรอให้ต้นแสดงอาการแล้วจึงแก้ไข เพราะเมื่อติดเชื้อแล้วไม่มีทางรักษาให้หายขาด

แนวทางป้องกันที่ได้ผลคือปลูกพืชกันชน เช่น ข้าวโพดหรือกล้วยรอบแปลง เพื่อลดการบินเข้ามาของเพลี้ยโดยตรง ร่วมกับการตรวจแปลงสม่ำเสมอ หากพบต้นที่แสดงอาการชัดเจนควรถอนทิ้งและทำลายทันทีเพื่อลดแหล่งแพร่เชื้อ ไม่ควรปล่อยต้นป่วยทิ้งไว้ในแปลง

การปลูกพันธุ์ต้านทานร่วมกับการจัดการแปลงอย่างเป็นระบบ เช่น เว้นระยะปลูกให้อากาศถ่ายเทดี และหมุนเวียนพื้นที่ปลูกไม่ปลูกมะละกอซ้ำที่เดิมติดต่อกันหลายปี จะช่วยลดความเสี่ยงของการระบาดในระยะยาวได้อย่างมีนัยสำคัญ`,
        en: `Papaya Ringspot Virus (PRSV) is the most destructive disease affecting papaya orchards across Thailand. Early symptoms appear as yellow-green mottling on young leaves, leaf distortion, and eventually dark green ring-shaped blemishes on the fruit surface — sharply reducing market value.

The virus spreads mainly through aphids, which pick up the virus while feeding on an infected plant and quickly transmit it to neighbouring trees. Controlling the aphid vector is therefore the core of prevention — far more effective than waiting for symptoms to appear, since there is no cure once a tree is infected.

An effective strategy is planting barrier crops such as corn or banana around the plot to reduce direct aphid influx, combined with regular field inspection. Trees showing clear symptoms should be uprooted and destroyed immediately to remove the source of further spread — never leave an infected tree standing in the field.

Growing resistant varieties alongside systematic field management — such as proper spacing for airflow and rotating planting areas instead of repeatedly growing papaya on the same plot for consecutive years — significantly reduces long-term outbreak risk.`,
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
      content: {
        th: `จุดเด่นของมะละกอเมื่อเทียบกับไม้ผลชนิดอื่นคือการให้ผลผลิตต่อเนื่องเกือบตลอดปี ไม่ได้ออกผลเป็นฤดูกาลเหมือนทุเรียน ทำให้การจัดการธาตุอาหารและน้ำอย่างสม่ำเสมอสำคัญกว่าการเร่งช่วงใดช่วงหนึ่งเป็นพิเศษ

การให้ปุ๋ยควรแบ่งใส่เป็นรอบสั้นๆ ทุก 3–4 สัปดาห์ แทนการใส่ทีละมากๆ ในครั้งเดียว เพราะมะละกอมีระบบรากตื้นและดูดซึมธาตุอาหารได้เร็ว การใส่ปุ๋ยบ่อยแต่ปริมาณน้อยจะให้ผลลัพธ์ที่สม่ำเสมอกว่า

การให้น้ำต้องระวังเรื่องน้ำขังที่โคนต้นเป็นพิเศษ เพราะมะละกอไวต่อโรครากเน่ามาก ควรให้น้ำแบบน้ำหยดหรือร่องน้ำที่ระบายได้ดี และลดปริมาณน้ำลงในช่วงฝนตกชุกเพื่อป้องกันน้ำขัง

การตัดแต่งใบแก่และใบที่เป็นโรคออกอย่างสม่ำเสมอ ช่วยให้ทรงพุ่มโปร่ง แสงแดดส่องถึงผลได้ทั่วถึง ทำให้ผลสุกสม่ำเสมอและลดความชื้นสะสมที่เป็นแหล่งเพาะเชื้อโรค นอกจากนี้ควรค้ำยันลำต้นในช่วงที่ติดผลดกเพื่อป้องกันต้นล้มจากน้ำหนักผล`,
        en: `Papaya's key advantage over other fruit trees is near-continuous year-round fruiting, unlike seasonal crops such as durian. This makes consistent nutrient and water management more important than pushing hard during any single period.

Fertiliser should be applied in short cycles every 3–4 weeks rather than large single doses, since papaya has a shallow root system that absorbs nutrients quickly. Frequent, smaller applications give more consistent results.

Watering needs extra care to avoid pooling at the trunk base, since papaya is highly susceptible to root rot. Use drip irrigation or well-drained furrows, and reduce watering during heavy rain periods to prevent waterlogging.

Regularly pruning old and diseased leaves keeps the canopy open, letting sunlight reach the fruit evenly for consistent ripening and reducing moisture buildup that harbours disease. Trees carrying a heavy fruit load should also be staked to prevent toppling under the weight.`,
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
      content: {
        th: `ตลาดมะละกอในไทยแบ่งชัดเจนเป็น 2 กลุ่มหลัก คือมะละกอดิบสำหรับทำส้มตำ และมะละกอสุกสำหรับบริโภคสด ซึ่งมีช่องทางขายและช่วงราคาที่แตกต่างกันมาก

มะละกอดิบมีความต้องการสูงตลอดปีจากร้านอาหารและแผงส้มตำ ราคาค่อนข้างคงที่ ไม่ผันผวนมากนัก เหมาะสำหรับเกษตรกรที่ต้องการกระแสเงินสดสม่ำเสมอ สามารถขายผ่านตลาดสดหรือทำสัญญาส่งประจำกับร้านค้าได้

มะละกอสุกบริโภคสดมีราคาสูงกว่ามากแต่ผันผวนตามฤดูกาลและคุณภาพ พันธุ์ฮอลแลนด์และเรดเลดี้เป็นที่ต้องการของซูเปอร์มาร์เก็ตและตลาดส่งออก ซึ่งมีมาตรฐานด้านขนาด รูปทรง และความหวานที่เข้มงวดกว่าตลาดทั่วไป

สำหรับเกษตรกรรายย่อย การกระจายความเสี่ยงด้วยการขายทั้งสองช่องทางพร้อมกัน คือดิบส่งร้านส้มตำและสุกขายตลาดสด จะช่วยรักษารายได้ให้สม่ำเสมอมากกว่าพึ่งพาช่องทางเดียว นอกจากนี้การแปรรูปเป็นมะละกอตากแห้งหรือมะละกอแช่อิ่มก็เป็นอีกทางเลือกที่ช่วยเพิ่มมูลค่าให้ผลที่ตำหนิ ขายสดไม่ได้ราคา`,
        en: `Thailand's papaya market splits clearly into two segments: green fruit for som tam and ripe fruit for fresh consumption — with very different sales channels and price ranges.

Green papaya sees steady year-round demand from restaurants and som tam vendors, with relatively stable pricing. This suits growers who want consistent cash flow and can sell through fresh markets or standing supply contracts with vendors.

Ripe fresh-eating papaya commands much higher prices but fluctuates more with season and quality. Holland and Red Lady varieties are in demand from supermarkets and export markets, which apply stricter standards for size, shape and sweetness than general markets.

For smallholder growers, spreading risk across both channels — selling green fruit to som tam vendors and ripe fruit to fresh markets — helps maintain steadier income than relying on one channel alone. Processing into dried or preserved papaya is another option to add value to blemished fruit that wouldn't fetch a good price fresh.`,
      },
    },
  ],
};