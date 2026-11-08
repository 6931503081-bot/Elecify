# Elec-Specify

Elec-Specify Dormitory Electricity Cost Management System. Built for Intro to Software Engineering (15031001), Academic Year 2026.

## The problem

Dormitory renters often run high-wattage electrical appliances simultaneously without knowing the financial impact until their monthly utility bill arrives. Existing calculation methods require repetitive manual input of wattage and rates, which leads to user fatigue, input errors, and unexpected bill spikes. Additionally, tenants receive total bill amounts without a clear breakdown of individual appliance consumption, making it difficult to adjust usage habits or verify billing accuracy.

## Who it's for

* **Dormitory Renters / Students** who need clear visibility of daily/monthly electricity costs and appliance consumption breakdowns to budget effectively.
* **Home / Property Leaders** who want to manage room electricity usage habits and maintain accurate monthly expense estimates.
* **Dormitory Landlords / Utility Providers** who benefit from transparent billing understanding by renters to avoid rate dispute issues.

## Core features (MVP)

| FR | Feature |
| :--- | :--- |
| FR-1 | User Profile & Appliance Presets (Preset selection for fan, refrigerator, light bulb, etc.) |
| FR-2 | Computing System / Cost Calculation Engine (Accurate daily and monthly kWh and cost calculation) |
| FR-3 | User Guide & Help Documentation (Step-by-step guidance and field tooltips) |
| FR-4 | Result Declaration & Cost Breakdown (Prominent total cost display with device usage breakdown) |
| FR-5 | Usage History & Session Persistence (Saved calculation logs across sessions for monthly comparison) |

## Tech stack

* **Frontend:** TypeScript / CSS / HTML
* **Backend / Database:** Web Local Storage / Session Management
* **SDLC Methodology:** Agile / Scrum (Flexible step-by-step development allowing restructuring based on feedback)

## Project status

- [x] Problem statement, users, MVP scope (M1)
- [x] SRS: FR-1–FR-5, NFRs, use cases (M2)
- [x] Use case diagram
- [x] Cost calculation engine & data persistence model
- [x] Traceability matrix (Golden Thread)
- [x] Non-functional requirements validation (NFR-1 to NFR-5)
- [x] UI wireframes & Clickable prototype (M3)
- [x] Final report & Demo slides (M3)
- [x] AI-use statement

## Non-functional requirements (NFRs)

* **NFR-1 (Performance):** Display updated total results within 1.5 seconds after pressing "Calculate".
* **NFR-2 (Performance):** Complete profile setup and first calculation within 45 seconds without external help.
* **NFR-3 (Usability):** Profile and history data persist without corruption across restarts.
* **NFR-4 (Reliability):** 100% mathematical accuracy using formula: `Cost = (Wattage * Hours) / 1000 * Unit Rate`.
* **NFR-5 (Security/Privacy):** User profile data and calculation logs strictly isolated per user session.

## Data model

* **profiles** — `id`, `user_name`, `saved_appliances`
* **appliances** — `id`, `preset_name`, `wattage`
* **calculation_logs** — `id`, `user_id`, `total_kwh`, `total_cost`, `breakdown_data`, `calculated_at`

See `/docs` for the full SRS, ERD, use case diagram, and traceability matrix.

## Team

| Name | Student ID | Role |
| :--- | :--- | :--- |
| Gankawi Hankham | 6931503023 | UX/UI Lead & Lead User Researcher (FR-1 Profile & Presets) |
| Jirapat Intharat | 6931503027 | Developer & Systems Engineer (FR-2 Computing System) |
| Sukrit Suteekul | 6931503078 | Interviewer Assistant & Co-developer (FR-5 Usage History & Data Persistence) |
| Akhane Wongchai | 6931503081 | Project manager & Scrum Master |
| Theethawat Thaweechai | 6931503108 | Interviewer & Communications & UX/UI Developer (FR-3 User Guide & FR-4 Result Declare)|

## AI Usage Log

| Prompt / Purpose | Output | สิ่งที่แก้ไข / ตัดสินใจเพิ่ม | Human Verification |
| :--- | :--- | :--- | :--- |
| **Gemini:** ร่างโครงสร้างเอกสาร SRS ตามรูปแบบมาตรฐาน M2 และจับคู่ข้อกำหนดจาก M1 Charter (ระบบ Elec-Specify) เข้ากับโครงสร้างระบบ | โครงสร้างเอกสาร SRS ฉบับร่าง พร้อมการเชื่อมโยง M1 Charter เข้ากับเป้าหมายของระบบ | ปรับคำอธิบาย Functional Requirements (FR) ให้ตรงตาม M1 Charter ของทีม และกำหนดขอบเขตระบบ (In-Scope / Out-of-Scope) ให้ชัดเจน | ตรวจสอบความถูกต้องของโครงสร้างเอกสาร ทบทวนความสอดคล้องกับข้อกำหนด M1 Charter และปรับแต่งรายละเอียดให้ตรงกับบริบทเฉพาะ |
| **Gemini:** สร้างข้อกำหนดเชิงฟังก์ชัน (FR-1 ถึง FR-5) และข้อกำหนดที่ไม่ใช่เชิงฟังก์ชัน (NFR-1 ถึง NFR-5) ที่วัดผลและทดสอบได้จริง | รายการ FR/NFR พร้อม User Stories (`As a... I want... so that...`) และ Acceptance Criteria | เพิ่มเงื่อนไข Validation บล็อกข้อมูลผิดพลาดจากมนุษย์ (Human-error input) เช่น การป้อนเวลาใช้งานเกิน 24 ชม./วัน ใน FR-2 และกำหนดเกณฑ์ความปลอดภัย NFR-5 (Data Isolation) | ตรวจสอบตรรกะคำนวณและข้อกำหนด Acceptance Criteria ว่าสามารถนำไปเขียน Unit Test ได้จริง และกำจัดคำที่คลุมเครือออกทั้งหมด |
| **Gemini:** สนับสนุนข้อมูลเชิงไอเดียและโครงสร้างส่วนต่อประสานผู้ใช้ ระหว่างกระบวนการปรับปรุงและยกเครื่อง UI ใหม่ (UI Reconstruction Process) | แนวคิดและโครงสร้างเค้าโครง UI (UI Layout Structure & Component Mapping) | ปรับ Layout หน้าแสดงผลสรุปค่าไฟฟ้าและกราฟสัดส่วนการใช้พลังงาน (FR-4 Breakdown Display) ให้เน้นการมองเห็นอุปกรณ์ที่กินไฟสูงสุด | ทำการทดสอบ Usability Trial กับกลุ่มผู้ใช้ตัวอย่าง เพื่อประเมินความสะดวกในการป้อนข้อมูลและการแสดงผล |
| **Claude:** ช่วยวิเคราะห์ จัดโครงสร้างโมดูล และจัดระเบียบชุดคำสั่ง (Code Structure & Organization) ให้เป็นไปตามหลัก Clean Code | โครงสร้างซอร์สโค้ดที่เป็นระบบ มีความคงเส้นคงวาทางสถาปัตยกรรม และแยกโมดูลชัดเจน | ปรับโครงสร้างโค้ดตามหลัก Modular Architecture เพิ่มการจัดการ Exception Handling และแยกตรรกะการคำนวณออกจาก UI Component | ร่วมทำการ Peer Review, ตรวจสอบ Code Quality และรัน Unit Test Suite เพื่อยืนยันความถูกต้องแม่นยำทางคณิตศาสตร์ 100% |
