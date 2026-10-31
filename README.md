# Elec-Specify

A dormitory electricity cost management system. Built for Intro to Software Engineering (15031001), Academic Year 2026.

## The problem

Dormitory renters often run high-wattage electrical appliances simultaneously without knowing the financial impact until their monthly utility bill arrives. Existing calculation methods require repetitive manual input of wattage and rates, which leads to user fatigue, input errors, and unexpected bill spikes. Additionally, tenants receive total bill amounts without a clear breakdown of individual appliance consumption, making it impossible to adjust habits or verify billing accuracy.

## Who it's for

* **Dormitory Renters / Students** who need clear visibility of daily/monthly electricity costs and individual appliance consumption breakdowns to budget effectively.


* **Home / Property Leaders** who want to manage room electricity usage habits and maintain accurate monthly expense estimates.


* **Dormitory Landlords / Utility Providers** who benefit from transparent billing understanding by renters to avoid rate disputes.



## Core features (MVP)

| FR | Feature |
| --- | --- |
| FR-1 | User Profile & Appliance Presets

 |
| FR-2 | Computing System (Cost Calculation Engine)

 |
| FR-3 | User Guide & Help Documentation

 |
| FR-4 | Result Declaration & Cost Breakdown

 |
| FR-5 | Usage History & Session Persistence

 |

## Tech stack

* **Frontend:** [HTML/CSS/JS]


* **Backend / database / auth / persistence:** Web Local Storage / Session Management
* **SDLC Methodology:** Agile / Scrum (Flexible step-by-step development based on user feedback)


* **Hosting:** Vercel / Netlify (free tier)



## Project status

* [x] Problem statement, users, MVP scope (M1)


* [x] SRS: FR-1–FR-5, NFRs, use cases (M2)


* [x] Use case diagram


* [ ] data model


* [ ] Sequence diagram


* [ ] UI wireframes


* [ ] Clickable prototype covering every Must FR (M3)


* [x] Final report + Golden Thread table (M3)


* [ ] Demo slides


* [x] AI-use statement



## Getting started

```bash
# clone the repo
git clone <repo-url>
cd elec-specify

# No install needed – just open index.html in your browser

```

## Data model

* **profiles** — `id`, `user_name`, `saved_appliances`
* **appliances** — `id`, `preset_name`, `wattage`


* **calculation_logs** — `id`, `user_id`, `total_kwh`, `total_cost`, `breakdown_data`, `calculated_at`



See `/docs` for the full SRS, ERD, sequence diagram, and wireframes.

## Team

| Name | Student ID | Role |
| --- | --- | --- |
| Patrpor Wutisutr | 693150xxxx | FR-1 Profile & Presets

 |
| Waratit Pongwiwat | 693150xxxx | FR-2 Computing System

 |
| Saroj Kruengsai | 693150xxxx | FR-4 Result Declaration & Breakdown

 |
| Strategic Team Member | 693150xxxx | FR-3 User Guide & FR-5 History Logs

 |

## AI usage

This project used Gemini to help draft the problem statement, SRS, FR/NFR list, ERD, sequence diagram, and wireframes. Every AI-drafted piece was reviewed and adjusted by the team.
