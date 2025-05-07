# Note WELL

This repo was built using the provided prompt for google pro 2.5 by using the prompt and article from (@Phillip Schmid) [https://www.linkedin.com/posts/philipp-schmid-a6a2bb196_we-will-enter-a-new-era-for-vibe-coding-activity-7325775055018225664-d6j5]

I ran this on a brand new cursor install, was unable to run it myself... didnt have node installed... so you will need to add that to have a look

To describe this as a fully working application is a little 'optomistic' a lot of the code is 'placeholder' and hard coded mocks, but I leave it as is.|

Overall though the amount and adherence to what was built did suprise me. 

'''
Prompt: “Develop a fully functional customer relationship management (CRM) web application tailored for a mid-sized healthcare provider. The application should streamline patient communication, appointment scheduling, record management, and billing processes. As a team of experienced full-stack web developers specializing in healthcare technology solutions, you will design and build this application. The application should feature a user-friendly interface with distinct dashboards for administrators, doctors, and staff. Include functionalities such as patient profiles with medical history, a messaging system, insurance verification, and report generation on key performance indicators like patient acquisition and appointment adherence. The front-end should be built using React. Maintain a professional, solution-oriented, and technically precise tone throughout the development process.”
'''

## Healthcare CRM Application

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
