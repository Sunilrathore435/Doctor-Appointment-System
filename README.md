# 🏥 Doctor Appointment Booking System

An intelligent and secure web-based platform for booking doctor appointments, featuring role-based dashboards for **Patients**, **Doctors**, and **Admins**. Built using **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **Tailwind CSS**, this full-stack system provides seamless experience from search to secure payment.

### 🚀 Live Demo  
👉 [🌐 Click Here to Visit the App](https://doctor-appointment-system-wyby.vercel.app)  
> Fully responsive | Razorpay payment integration | Secure JWT Auth | Admin control panel

---

## ✨ Key Features

| User Role   | Features |
|-------------|----------|
| 👤 Patient  | Register, search doctors by city/specialization, book appointments, pay online |
| 👨‍⚕️ Doctor | Register for approval, manage availability, view bookings, accept/reject appointments |
| 🛡️ Admin    | Approve/reject doctor registrations, manage all users, control platform-wide access |

---

## 🔐 Role-Based Dashboards

### 👤 Patient
- Browse/search doctors
- View doctor profiles
- Book appointments
- Make online payments
- View booking history

### 👨‍⚕️ Doctor
- Register with specialization and city
- Await admin approval
- Manage appointments
- Approve/reject patient requests

### 🛡️ Admin
- Secure login panel
- Approve doctor accounts
- View/manage all users
- Monitor all appointments

---

## ⚙️ Tech Stack

| Layer         | Tech |
|---------------|------|
| Frontend      | React.js, Tailwind CSS, Axios |
| Backend       | Node.js, Express.js, Mongoose |
| Database      | MongoDB (via Mongoose) |
| Auth & Security | JWT, Bcrypt |
| Payments      | Razorpay Integration |
| Deployment    | Vercel (Frontend) & Render (Backend or optional local) |

---
### 📈 Future Enhancements
📬 Email & SMS notifications

💬 Doctor-patient real-time chat

📊 Admin analytics dashboard

📅 Google Calendar sync

⭐ Doctor ratings and reviews

### 🙌 Acknowledgements
Razorpay – payment integration

MongoDB Atlas – cloud DB

Vercel – frontend hosting

Tailwind CSS – beautiful UI

### 👨‍💻 Developed By
Sunil Rathore
B.Tech CSE – Jai Narain College of Technology, Bhopal

## 📁 Project Structure
doctor-appointment/
│
├── 📁 admin/ # Admin Panel (React + Tailwind CSS)
│ ├── components/ # UI components (Sidebar, Tables, etc.)
│ ├── pages/ # Admin pages (Dashboard, Doctor Requests)
│ ├── context/ # Auth context for admin
│ ├── utils/ # Axios instance, JWT helpers
│ └── App.js / index.js # Entry point & routing

├── 📁 frontend/ # Patient & Doctor Interface (React + Tailwind CSS)
│ ├── components/ # Shared UI components (Navbar, Cards, etc.)
│ ├── pages/ # Role-based pages (Login, Book, Dashboard, etc.)
│ ├── context/ # Auth & Global State
│ ├── utils/ # Axios config, helpers
│ └── App.js / index.js # Routing setup

├── 📁 backend/ # Backend (Node.js + Express + MongoDB)
│ ├── controllers/ # API logic (auth, users, doctors, admin)
│ ├── models/ # Mongoose schemas (User, Doctor, Appointment)
│ ├── routes/ # API route definitions
│ ├── config/ # Razorpay, MongoDB, JWT middleware
│ ├── utils/ # Token generation, auth checks
│ └── server.js # Entry point for the Express server

├── .env # Environment variables (JWT_SECRET, MONGO_URI, etc.)
├── package.json # Project metadata & scripts
└── README.md # Full project documentation



