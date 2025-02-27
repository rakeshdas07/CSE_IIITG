A brief description of what this project does and who it's for.

# Hostel Mess Management System

A web-based hostel mess management system that simplifies and streamlines mess operations in hostels. This system is designed to reduce manual work, improve communication, and offer real-time updates to both students and administrators, making hostel mess management more transparent and user-friendly.

## Features

### Student Dashboard
- **View Meal Menu**: Students can check the current meal plans.
- **Feedback Submission**: Provides an option for students to share feedback about the mess services.
- **Fee Payment**: Allows students to pay their mess fees online.
- **Notifications**: Displays notices and announcements from the administration in real-time.

### Admin Dashboard
- **Manage Meal Plans**: Enables administrators to update and modify the meal menu.
- **Send Notifications**: Allows admins to post announcements and notices for students.
- **Payment Management**: View and manage student payment statuses.
- **Feedback Monitoring**: Access and analyze feedback submitted by students for continuous improvement.

## Objectives

The system aims to:
- **Reduce Manual Work**: Automates repetitive tasks, such as tracking payments and managing menus.
- **Improve Communication**: Facilitates clear, organized communication between students and mess administration.
- **Enhance Transparency**: Makes mess operations and payment statuses accessible to both students and administrators.
- **Provide Real-Time Updates**: Ensures that both students and admins have the latest information on meal plans, announcements, and payment statuses.

## Table of Contents

- [Features](#features)
- [Objectives](#objectives)
- [Requirement Analysis](#requirement-analysis)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)

## Requirement Analysis

### Functional Requirements:

- **User Management & Student Registration/Login**
- **Meal  Management & Meal Scheduling**
- **Menu Management & Menu Planning**
- **Billing & Payments**
- **Admin Dashboard Centralized Control**
- **Feedback Analytics**

  

### Non-Functional Requirements:
- **Usability**: Easy to navigate, with a simple registration and login flow.
- **Accessibility**: Cross-browser compatibility, mobile responsiveness.
- **Security**: Password encryption, secure API endpoints, and validation checks.
- **Performance**: Quick response time.

## Tech Stack

The project is built with:

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: Razorpay
- **Deployment**: LocalHost

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (or a connection to a MongoDB Atlas cloud database)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rakeshdas07/CSE_IIITG.git
   cd CSE_IIITG
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/hostel_mess_management
   JWT_SECRET=your_jwt_secret
   ```

   - `PORT`: Port number the server will listen on.
   - `MONGODB_URI`: MongoDB connection string.
   - `JWT_SECRET`: Secret key for JWT authentication.

4. **Run the Application**:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

### Seed Database (Optional)


```bash
npm run seed
```

This command populates the database with initial data.

## Project Structure

```
FrontEnd/
├── src/
    ├── components/
    │   ├── Homepage/
    │   │   ├── HomePage.js
    │   │   ├── HomePage.css
    │   ├── StudentDashboard/
    │   │   ├── Registration.js
    │   │   ├── Registration.css
    │   │   ├── Login.js
    │   │   ├── Login.css
    │   │   ├── PaymentStatus.js
    │   │   ├── PaymentStatus.css
    │   │   ├── NoticeBoard.js
    │   │   ├── NoticeBoard.css
    │   │   ├── Calendar.js
    │   │   ├── Menu.js
    │   │   ├── FeedbackForm.js
    │   │   ├── Timings.js
    │   │   ├── Timings.css
    │   │   ├── studentdashboard.js
    │   │   ├── studentdashboard.css     
    │   ├── AdminDashboard/
    |   |   ├── AdminLogin.js
    |   |   ├── AdminLogin.css
    |   |   ├── AdminDashboard.js
    |   |   ├── admindashboard.css
    │   │   ├── MealPlan.js
    │   │   ├── AttendanceReport.js
    │   │   ├── BillingHistory.js
    │   │   ├── ReportAnalytics.js
    │   │   ├── FeedbackAnalysis.js
    │   └── common/
    │       ├── Navbar.js
    |       ├── Navbar.js
    │       ├── Footer.css    
    │       ├── Footer.js
    |       ├── PrivateRoute.js
    ├── context/
    │       └── authContext.js
    ├── services/
    │       └── api.js
    ├── App.js
    ├── index.js
    └── styles/
            └── common.css



BackEnd/
├── src/
│   ├── models/             # Database models (e.g., Student, Admin, Menu, Payment)
│   ├── controllers/        # Logic for handling requests (StudentController,    AdminController)
│   ├── routes/             # Defines API routes (studentRoutes, adminRoutes)
│   ├── middleware/         # Middleware (authentication, error handling)
│   └── views/              # View templates (HTML, EJS files if applicable)
├── package.json            # npm dependencies and scripts
└── README.md               # Project documentation
```

### Key Files and Directories

- **public/**: Contains static assets like CSS and JavaScript.
- **src/models/**: Contains MongoDB schemas for Student, Admin, Menu, Payment, etc.
- **src/controllers/**: Contains logic for handling different actions, such as registration, login, payment processing, etc.
- **src/routes/**: Defines routes for student and admin functionalities.
- **src/middleware/**: Custom middleware, such as authentication checks.

## Usage

### Student Workflow

1. **Registration**: Students register an account using their student details.
2. **Login**: After successful registration, students can log in using their email and password.
3. **Dashboard**:
   - **View Meal Menu**: Check the current meal schedule.
   - **Submit Feedback**: Provide feedback on mess services.
   - **Make Payment**: Pay mess fees online.
   - **Check Notifications**: View any notices from the administration.

### Admin Workflow

1. **Login**: Admins log in using their admin credentials.
2. **Dashboard**:
   - **Update Menu**: Modify and update the meal plan for the mess.
   - **Manage Payments**: Track student payments and payment status.
   - **Send Notices**: Publish notices visible to students.
   - **View Feedback**: Monitor and analyze feedback from students.

### Activity Diagram

![Activity Main drawio](https://github.com/user-attachments/assets/6e9f2f22-582d-4633-87c7-e8b61934de9d)


---

## Screenshots

Screenshots here for the **Student Dashboard**, **Admin Dashboard**, and other main views to give users a preview of the application.

![Home page](https://github.com/user-attachments/assets/cb5652fb-413e-42ee-b5c5-263a50296260)

![Student Registration](https://github.com/user-attachments/assets/f3b16813-e4a4-437b-9372-329b6389b677)

![Student Login](https://github.com/user-attachments/assets/63d895dd-c7fd-45d9-94b7-08ac63543583)

![Student Dashboard](https://github.com/user-attachments/assets/7164f744-11f7-407c-a24e-f0f298f9ed6d)

![Admin Login](https://github.com/user-attachments/assets/c0004c84-64a8-49d2-a6ff-00f1fcf3a2d6)

![Admin Dashboard](https://github.com/user-attachments/assets/35c81cb1-f0a8-4809-8b65-178457c02f87)

---

## Future Enhancements

- **Automated Meal Notifications**: Send meal reminders to students.
- **Advanced Analytics**: Implement data analysis for feedback trends and payment tracking.
- **Mobile Compatibility**: Improve the UI for mobile device accessibility.

---

This `README.md` provides a comprehensive overview of the project, including setup instructions, functionality, contribution guidelines, and future enhancements. This helps to quickly understand the purpose and structure of the **Hostel Mess Management System**.
