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

## Traceability Matrix (Golden Thread)

| Problem / Pain | Requirement (FR) | Solution / Design | Feature Built | Test |
| :--- | :--- | :--- | :--- | :--- |
| **Redundant Data Entry & Device Fatigue**<br>ผู้เช่าลืมค่ากำลังไฟ (Wattage) อุปกรณ์และเบื่อการกรอกข้อมูลซ้ำๆ ทุกครั้งที่คำนวณ | **FR-1:** User Profile & Appliance Presets | Preset Manager & Profile System Architecture *(Ch 4-5)* | Appliance Preset & Profile Setup Module *(Ch 6)* | Profile Data Persistence & Auto-population Unit Tests *(Ch 7)* |
| **Unexpected Bill Spikes & Human Input Errors**<br>ผู้เช่าเปิดเครื่องใช้ไฟฟ้าพร้อมกันโดยไม่ทราบค่าใช้จ่ายล่วงหน้า และป้อนเวลาใช้งานผิดพลาด | **FR-2:** Computing System (Energy & Cost Calculation) | Calculation Engine + Input Validator Logic *(Ch 4-5)* | Electricity Calculation Engine *(Ch 6)* | Mathematical Accuracy ($Cost$) & Input Validation Unit Tests *(Ch 7)* |
| **Lack of Instructions & Misoperation**<br>ผู้ใช้สับสนวิธีการระบุค่าวัตต์หรือเวลาใช้งาน ส่งผลให้คำนวณผิดพลาด | **FR-3:** User Guide & Help Documentation | In-App Help System & Field Tooltip Framework *(Ch 4-5)* | Interactive User Guide & Tooltip System *(Ch 6)* | Usability Trial & Help Navigation Verification Tests *(Ch 7)* |
| **No Visibility on High-Consumption Devices**<br>ผู้เช่าได้รับแจ้งเฉพาะยอดรวมค่าไฟ ไม่ทราบสัดส่วนว่าอุปกรณ์ใดกินไฟมากที่สุด | **FR-4:** Result Declaration & Breakdown | Cost Aggregator & Visual Breakdown Renderer *(Ch 4-5)* | Cost Breakdown & Consumption Dashboard *(Ch 6)* | Real-time Data Sync & Sorting Accuracy Tests *(Ch 7)* |
| **Data Loss Between Sessions**<br>ข้อมูลประวัติการคำนวณหายเมื่อปิดแอป ไม่สามารถเปรียบเทียบแนวโน้มกับใบแจ้งหนี้จริงได้ | **FR-5:** Usage History & Data Persistence | Local/Session Storage & History Database Handler *(Ch 4-5)* | Calculation Log & History Management *(Ch 6)* | App Restart & Force-close Data Integrity Tests *(Ch 7)* |
```[cite: 7, 8, 9, 10, 11, 12, 13]


## Team

| Name | Student ID | Role |
| :--- | :--- | :--- |
| Gankawi Hankham | 6931503023 | Co UX/UI Developer & User Researcher (FR-1 Profile & Presets) |
| Jirapat Intharat | 6931503027 | Developer & Systems Engineer (FR-2 Computing System) |
| Sukrit Suteekul | 6931503078 | Interviewer Assistant & Co-developer (FR-5 Usage History & Data Persistence) |
| Akhane Wongchai | 6931503081 | Project manager & Scrum Master |
| Theethawat Thaweechai | 6931503108 | Interviewer & Communications & UX/UI Developer (FR-3 User Guide & FR-4 Result Declare)|

## AI Usage Log

| Prompt / Purpose | Output | Modifications / Decisions Added | Human Verification |
| :--- | :--- | :--- | :--- |
| **Gemini:** Draft the SRS document structure following the M2 standard format and map M1 Charter requirements (Elec-Specify system) into the system architecture. | Draft SRS document structure with mapped M1 Charter goals. | Refined Functional Requirements (FR) descriptions to align with the team's M1 Charter and explicitly defined system scope (In-Scope / Out-of-Scope). | Verified document structure accuracy, reviewed alignment with M1 Charter specifications, and adjusted details to fit the specific domain context. |
| **Gemini:** Generate testable and quantifiable functional requirements (FR-1 to FR-5) and non-functional requirements (NFR-1 to NFR-5). | List of FRs/NFRs complete with User Stories (`As a... I want... so that...`) and Acceptance Criteria. | Added input validation rules to prevent human error (e.g., blocking usage entries exceeding 24 hrs/day in FR-2) and specified data isolation security rules in NFR-5. | Verified calculation logic and Acceptance Criteria for unit test feasibility, removing all vague terminology. |
| **Gemini:** Provide conceptual guidance and structural layouts during the UI Reconstruction Process. | UI layout concepts and component mapping structure. | Refined the layout for the electricity cost summary display and energy breakdown chart (FR-4 Breakdown Display) to highlight high-wattage devices. | Conducted usability trials with sample users to evaluate data input convenience and visual clarity. |
| **Claude:** Analyze, modularize, and organize source code (Code Structure & Organization) adhering to Clean Code principles. | Structured, architecturally consistent codebase with modular separation. | Refactored code under Modular Architecture, implemented exception handling, and decoupled core calculation logic from UI components. | Conducted peer code reviews, verified code quality, and ran unit test suites to guarantee 100% mathematical accuracy. |
