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

* **Frontend:** HTML / CSS / JavaScript
* **Backend / Database:** Web Local Storage / Session Management
* **SDLC Methodology:** Agile / Scrum (Flexible step-by-step development allowing restructuring based on feedback)

## Project status

- [x] Problem statement, users, MVP scope (M1)
- [x] SRS: FR-1–FR-5, NFRs, use cases (M2)
- [x] Use case diagram
- [x] Cost calculation engine & data persistence model
- [x] Traceability matrix (Golden Thread)
- [x] Non-functional requirements validation (NFR-1 to NFR-5)
- [ ] UI wireframes & Clickable prototype (M3)
- [ ] Final report & Demo slides (M3)
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
| Patrpor Wutisutr | 693150xxxx | FR-1 Profile & Presets Lead |
| Waratit Pongwiwat | 693150xxxx | FR-2 Computing System Lead |
| Saroj Kruengsai | 693150xxxx | FR-4 & FR-5 Result Breakdown & History Lead |
| Strategic Team Member | 693150xxxx | FR-3 User Guide & Documentation Lead |

## AI usage

This project used Gemini to help draft the SRS structure, map M1 charter requirements, and generate functional/non-functional criteria. Every AI-drafted piece was reviewed, verified, and adjusted by the team to fit the specific domain context.
