# Healthcare CRM Application

This project is a Customer Relationship Management (CRM) web application tailored for a mid-sized healthcare provider.

## Project Goals

- Streamline patient communication
- Simplify appointment scheduling
- Efficiently manage patient records
- Optimize billing processes

## Target Users

- Administrators
- Doctors
- Staff

## Core Functionalities

- User-friendly interface with distinct dashboards for each user role.
- Patient profiles with comprehensive medical history.
- Secure messaging system for patient-provider communication.
- Appointment scheduling and management.
- Insurance verification module.
- Report generation for key performance indicators (KPIs) like patient acquisition and appointment adherence.

## Technology Stack

- **Front-end**: React
- **Back-end**: (To be detailed - conceptual for now)
- **Database**: (To be detailed - conceptual for now)

## Project Structure

```
healthcare-crm/
├── client/               # React Front-end
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   ├── Patients/
│   │   │   ├── Appointments/
│   │   │   ├── Billing/
│   │   │   └── Messaging/
│   │   ├── pages/          # Top-level page components
│   │   │   ├── LoginPage.js
│   │   │   ├── AdminDashboardPage.js
│   │   │   ├── DoctorDashboardPage.js
│   │   │   ├── StaffDashboardPage.js
│   │   │   ├── PatientProfilePage.js
│   │   │   └── SettingsPage.js
│   │   ├── services/       # API call handlers (mocked initially)
│   │   ├── contexts/       # React contexts (e.g., AuthContext)
│   │   ├── routes/         # Application routing
│   │   └── assets/         # Static assets (images, styles)
│   └── package.json
├── server/               # Back-end
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
└── README.md
``` 