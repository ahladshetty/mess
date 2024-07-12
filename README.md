# 🍽️ Namma Mess – Hostel Mess Management System

## 📋 Project Overview
Namma Mess is a dynamic web application developed to manage hostel mess operations. Built using JavaScript frameworks React, Node.js, Express.js, along with Sequelize ORM, it allows users to effortlessly browse the weekly food menu and vote for the desired weekend menu. This project aims to enhance the dining experience in hostels by incorporating user feedback directly into meal planning

## ✨ Features
- **View Weekly Menu:** Users can view the weekly menu
- **Vote for Weekend Menu:** Users can vote for their preferred dishes for the weekend
- **Menu Management:** Staff can update the menu
- **User Authentication:** Secure login for users and staff

## 🛠️ Installation and Setup

### ⚙️ Prerequisites
- Node.js
- npm (Node Package Manager)

### 📝 Steps to Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ahladshetty/mess.git
   cd mess
   ```
2. **Setup Client**
   ```bash
   cd client
   npm install
   npm start
   ```
3. **Setup Server**
   ```bash
   cd server
   npm install
   npm start
   ```
   
## 🏗️ Project Structure

```
mess
├─ client
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ components
│     │  ├─ Account.js
│     │  ├─ Cover.css
│     │  ├─ Cover.js
│     │  ├─ EditMenu.css
│     │  ├─ EditMenu.js
│     │  ├─ Home.css
│     │  ├─ Home.js
│     │  ├─ Login.css
│     │  ├─ Login.js
│     │  ├─ Navbar.js
│     │  ├─ ProtectedRoute.js
│     │  ├─ Signup.css
│     │  ├─ Signup.js
│     │  ├─ StaffLogin.js
│     │  ├─ Vote.css
│     │  └─ Vote.js
│     ├─ index.css
│     └─ index.js
└─ server
   ├─ controllers
   │  ├─ menuController.js
   │  ├─ messControllers.js
   │  └─ userController.js
   ├─ DB
   │  ├─ db.js
   │  └─ mess.sqlite
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Food.js
   │  ├─ Menu.js
   │  ├─ Mess.js
   │  ├─ Staff.js
   │  ├─ User.js
   │  └─ Vote.js
   ├─ package-lock.json
   ├─ package.json
   └─ routes
      ├─ menuRoutes.js
      └─ userRoutes.js
```

## 🌐 API Endpoints

### 📋 Menu Routes

- **GET /menu**: Show the current menu
- **PUT /updatemenu**: Update the menu
- **POST /votemenu**: Vote for menu items (requires user authentication)

### 👥 User Routes

- **POST /loginuser**: User login
- **POST /loginstaff**: Staff login
- **POST /adduser**: Add a new user (staff)
- **PUT /editmenu**: Edit menu (staff) 