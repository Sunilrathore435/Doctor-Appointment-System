# 🏥 Doctor Appointment Booking System

An intelligent and secure web-based platform for booking doctor appointments, featuring role-based dashboards for **Patients**, **Doctors**, and **Admins**. Built using **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **Tailwind CSS**, this full-stack system provides a seamless experience from doctor discovery to secure payment.

---

## 🚀 Live Demo

👉 [🌐 Click Here to Visit the App](https://doctor-appointment-system-wyby.vercel.app)

> ✅ Fully responsive & cross-browser  
> 🔐 Secure JWT Authentication  
> 💳 Razorpay Payment Integration  
> 🛠️ Admin Control Panel

---

## ✨ Key Features

| 👥 Role      | 🛠️ Features |
|-------------|-------------|
| **Patient** | Register & Login<br>Search doctors by city/specialization<br>View doctor profiles<br>Book appointments<br>Make secure online payments<br>View booking history |
| **Doctor**  | Register with specialization & city<br>Pending admin approval<br>Manage appointments<br>Accept or reject patient requests |
| **Admin**   | Secure admin login<br>Approve or reject doctor registrations<br>Monitor all appointments<br>Manage users across the platform |

---

## 🔐 Role-Based Dashboards

### 👤 Patient
- Intuitive UI to browse/search doctors
- Real-time booking slots based on availability
- Razorpay-integrated payment gateway
- Dashboard for appointment history

### 👨‍⚕️ Doctor
- Role-specific dashboard
- Pending approval system
- Appointment status control
- Profile and availability management

### 🛡️ Admin
- Dedicated admin panel (separate frontend)
- Full visibility over all users and bookings
- Approve/reject doctor registration requests
- Secure platform access control

---

## ⚙️ Tech Stack

| Layer           | Technology Stack |
|----------------|------------------|
| **Frontend**    | React.js, Tailwind CSS, Axios |
| **Backend**     | Node.js, Express.js |
| **Database**    | MongoDB (Mongoose ORM) |
| **Authentication** | JWT, Bcrypt |
| **Payments**    | Razorpay API |
| **Deployment**  | Vercel (Frontend & Admin), Render/Local (Backend) |

---

## 📈 Future Enhancements

- 📬 Email and SMS Notifications
- 💬 Real-time Doctor-Patient Chat System
- 📊 Admin Analytics & Reporting Dashboard
- 📅 Google Calendar Integration for Doctors
- ⭐ Patient Reviews & Ratings for Doctors

---

## 👨‍💻 Developed By

**Sunil Rathore**  
B.Tech CSE – Jai Narain College of Technology, Bhopal  

---

## 🙌 Acknowledgements

- [Razorpay](https://razorpay.com) – Payment Gateway  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) – Cloud DB Hosting  
- [Vercel](https://vercel.com) – Frontend Hosting  
- [Tailwind CSS](https://tailwindcss.com) – UI Framework  

---

## 📁 Project Structure

```bash
doctor-appointment/
│
├── 📁 admin/                    # Admin Panel (React + Tailwind CSS)
│   ├── components/             # UI components (Sidebar, Tables, etc.)
│   ├── pages/                  # Admin pages (Dashboard, Doctor Requests)
│   ├── context/                # Auth context for admin
│   ├── utils/                  # Axios instance, JWT helpers
│   └── App.js / index.js       # Entry point & routing
│
├── 📁 frontend/                 # Patient & Doctor Interface (React + Tailwind CSS)
│   ├── components/             # Shared UI components (Navbar, Cards, etc.)
│   ├── pages/                  # Role-based pages (Login, Book, Dashboard, etc.)
│   ├── context/                # Auth & Global State
│   ├── utils/                  # Axios config, helpers
│   └── App.js / index.js       # Routing setup
│
├── 📁 backend/                  # Backend (Node.js + Express + MongoDB)
│   ├── controllers/            # API logic (auth, users, doctors, admin)
│   ├── models/                 # Mongoose schemas (User, Doctor, Appointment)
│   ├── routes/                 # API route definitions
│   ├── config/                 # Razorpay, MongoDB, JWT middleware
│   ├── utils/                  # Token generation, auth checks
│   └── server.js               # Entry point for the Express server
│
├── .env                        # Environment variables (JWT_SECRET, MONGO_URI, etc.)
├── package.json                # Project metadata & scripts
└── README.md                   # Full project documentation
