##รายการไฟล์ที่เพิ่มในการแก้ UI

| หมวดหมู่ไฟล์ | ชื่อไฟล์ | หน้าที่และรายละเอียด |
| :--- | :--- | :--- |
| **Core State & Controller** | `App.tsx` | คอมโพเนนต์หลักที่ควบคุม State ศูนย์กลาง: จัดการธีม Light/Dark/System, การสลับหน้าระหว่าง Landing Page และ Dashboard, การเปิด/ปิด Modal เข้าสู่ระบบ Google, และจำลองข้อมูลเครื่องใช้ไฟฟ้า[cite: 14] |
| **UI Components** | `AuthModal.tsx` | ป๊อปอัป Modal สำหรับเข้าสู่ระบบผ่าน Google Account มีตัวเลือกบัญชีที่เตรียมไว้และรองรับการกรอกอีเมลใหม่ พร้อมแอนิเมชันเอฟเฟกต์ Confetti เมื่อเข้าสู่ระบบสำเร็จ[cite: 14] |
| **UI Components** | `EnergyCalculator.tsx` | เครื่องคำนวณและจำลองค่าไฟแบบเรียลไทม์ ปรับชั่วโมงการใช้งานของเครื่องใช้ไฟฟ้าหลัก (แอร์, ตู้เย็น, คอมพิวเตอร์, ทีวี) ผ่าน Slider พร้อมแสดงยอดค่าไฟบาท/เดือนทันที[cite: 14] |
| **UI Components** | `EnergyDashboard.tsx` | หน้าแดชบอร์ดบริหารจัดการพลังงานแบบเต็มรูปแบบ มีกราฟโดนัทแจกแจงสัดส่วนการกินไฟ, การจัดการรายการเครื่องใช้ไฟฟ้า (เพิ่ม/ลบ/คำนวณตามอุณหภูมิภายนอก), และการปรับตั้งค่าอัตราค่าไฟฟ้าต่อหน่วย[cite: 14] |
| **UI Components** | `HeroLightBulb.tsx` | คอมโพเนนต์หลอดไฟ Edison เวกเตอร์ SVG จำลองแสง 3 มิติ ตอบสนองต่อการคลิกเพื่อสลับโหมด พร้อมเสียงคลิกสวิตช์กายภาพ (Web Audio API), ป้ายสถานะโหมดกระชับ ("โหมดสว่าง" / "โหมดมืด"), และปุ่ม Call-to-Action เข้าสู่ระบบด้วย Google Account[cite: 14] |
| **UI Components** | `LandingPage.tsx` | หน้า Landing Page แบบ Responsive ครบวงจร ประกอบด้วย Hero Section, ตัววัดความน่าเชื่อถือ (Trust Metrics), ตัวจำลองค่าไฟ, Bento Grid จุดเด่นของระบบ, ขั้นตอนการใช้งาน (How It Works), คำถามที่พบบ่อย (FAQ Accordion) และ Footer[cite: 14] |
| **UI Components** | `Navbar.tsx` | แถบนำทางด้านบนแบบ Glassmorphism แสดงลิงก์นำทาง, เมนูสลับ 3 ภาษา, ปุ่มสลับธีม สว่าง/มืด/ตามระบบ, และปุ่มเปิด Dashboard / Google Login[cite: 14] |
| **Documentation & Guides** | `README.md` | เอกสารอธิบายรายละเอียดโปรเจกต์ คู่มือการติดตั้ง การตั้งค่า และขั้นตอนการใช้งานระบบ[cite: 14] |
| **HTML & Static Assets** | `Update Font.html` | ไฟล์ HTML สำหรับแสดงตัวอย่างและทดสอบการอัปเดตฟอนต์ IBM Plex Sans Thai และ Montserrat ในระบบ[cite: 14] |
| **Styling & Design System** | `index.css` | สไตล์ส่วนกลางของทั้งระบบ ประกอบด้วย Tailwind CSS v4, ตัวแปรสีหลัก (Eggshell White `#FFFDF9`, Vibrant Yellow `#FBBF24`, Sky Blue `#0284C7`), สไตล์ปุ่มกดแบบมีมิติ 3D (Tactile Buttons), Keyframe แอนิเมชันแสงหมุน และเงาตัวอักษรให้อ่านง่ายคมชัด (`text-drop-subtle`)[cite: 14] |
| **UI Components** | `index.ts` | Barrel Export รวมการส่งออกคอมโพเนนต์ทั้งหมด เพื่อให้เรียกใช้งานได้สะดวกและเป็นระเบียบ[cite: 14] |
| **HTML & Static Assets** | `lumina_bulb_studio_icon_gallery.html` | ไฟล์ HTML แกลเลอรีแสดงตัวอย่างไอคอนและหลอดไฟเวกเตอร์สำหรับนำไปใช้งานในส่วนต่างๆ ของระบบ[cite: 14] |
| **Configuration & Environment** | `metadata.json` | ข้อมูล Metadata ของแอปพลิเคชัน (ชื่อระบบ คำอธิบาย และ Permissions)[cite: 14] |
| **Data Models & Localization** | `types.ts` | ศูนย์รวม Interface และ Type Definitions ของระบบ เช่น `Appliance` (ข้อมูลเครื่องใช้ไฟฟ้า), `UserProfile` (ข้อมูลผู้ใช้), `ThemeMode` (light/dark/system) และ `Language` (th/en/zh)[cite: 14] |
