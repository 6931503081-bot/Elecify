// Search-box autocomplete suggestions (names only: wattage comes from the search itself).
// Add more lines here to widen what the box can suggest.
export const APPLIANCE_SUGGESTIONS: string[] = [
  // Air conditioners
  'แอร์ Daikin Inverter 12,000 BTU',
  'แอร์ Daikin Smile Inverter 18,000 BTU',
  'แอร์ Mitsubishi Heavy Duty 18,000 BTU',
  'แอร์ Carrier Copper 11 9,000 BTU',
  'แอร์ Samsung WindFree Inverter 12,000 BTU',
  'แอร์ LG Dual Inverter 12,000 BTU',
  // Refrigerators
  'ตู้เย็น LG Smart Inverter 2 ประตู 14 คิว',
  'ตู้เย็น Samsung Digital Inverter 12 คิว',
  'ตู้เย็น Mitsubishi 3 ประตู Multi Airflow',
  'ตู้เย็น Panasonic Inverter 2 ประตู',
  'ตู้เย็น Toshiba Inverter 2 ประตู',
  // Fans
  'Hatari 16-inch Slide Fan',
  'Hatari Industrial Floor Fan (IQ18M1) 18 นิ้ว',
  'Hatari 18-inch Stand Fan',
  'Mitsubishi Electric 18-inch Stand Fan',
  'Sharp 16-inch Wall Fan',
  'พัดลมตั้งโต๊ะ 12 นิ้ว',
  // Air purifiers
  'เครื่องฟอกอากาศ Xiaomi Smart Air Purifier 4',
  'เครื่องฟอกอากาศ Sharp FP-J40',
  'Dyson Purifier Cool TP07',
  // TVs & monitors
  'ทีวี Samsung 55" Crystal UHD 4K',
  'ทีวี Sony Bravia 65" OLED 4K',
  'ทีวี LG 43" Smart Full HD',
  'ทีวี TCL 50" Google TV',
  'จอมอนิเตอร์ 24 นิ้ว',
  // Computers
  'Apple MacBook Air M3',
  'Dell XPS 15',
  'Gaming Laptop RTX 4060',
  'คอมพิวเตอร์ตั้งโต๊ะ Desktop PC',
  'Wi-Fi Router',
  // Water heaters
  'เครื่องทำน้ำอุ่น Panasonic 3,500W',
  'เครื่องทำน้ำอุ่น Electrolux ComfortFlow 4,500W',
  'เครื่องทำน้ำอุ่น Stiebel Eltron 3,500W',
  // Kitchen
  'หม้อหุงข้าว Sharp 1.8 ลิตร',
  'หม้อหุงข้าว Toshiba 1 ลิตร',
  'กระติกน้ำร้อน Tiger 3 ลิตร',
  'กาต้มน้ำไฟฟ้า Philips 1.7 ลิตร',
  'ไมโครเวฟ Sharp 25 ลิตร',
  'เตาแม่เหล็กไฟฟ้า Induction Cooker',
  'หม้อทอดไร้น้ำมัน Air Fryer 5 ลิตร',
  'เครื่องปั่น Philips 600W',
  // Laundry & home
  'เครื่องซักผ้าฝาบน Samsung 10 กก.',
  'เครื่องซักผ้าฝาหน้า LG Inverter 9 กก.',
  'เครื่องอบผ้า Electrolux 8 กก.',
  'เตารีดไอน้ำ Philips',
  'ไดร์เป่าผม Dyson Supersonic',
  'เครื่องดูดฝุ่น Dyson V12',
  'ปั๊มน้ำ Mitsubishi 250W',
  'ตู้แช่แข็ง Sanden 2 ประตู',
  'เครื่องทำน้ำเย็น ตู้กดน้ำ Mazuma',
  'หลอดไฟ LED 9W',
];

/** Case-insensitive match: every typed word must appear in the suggestion. Starts-with ranks first. */
export function getSuggestions(query: string, limit = 6): string[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/);
  const hits = APPLIANCE_SUGGESTIONS.filter(s => {
    const low = s.toLowerCase();
    return words.every(w => low.includes(w));
  }).filter(s => s.toLowerCase() !== q);
  hits.sort((a, b) => Number(b.toLowerCase().startsWith(q)) - Number(a.toLowerCase().startsWith(q)));
  return hits.slice(0, limit);
}
