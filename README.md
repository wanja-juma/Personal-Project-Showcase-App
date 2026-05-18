# E-Commerce Administrator Portal

An administrator dashboard for managing products in an e-commerce store.  
The application allows administrators to add, view, search, edit, and delete products using a simulated backend.

---

## Project Overview

This project was built using React and Vite to demonstrate:

- Client-side routing
- CRUD operations
- Advanced state management
- Dynamic search functionality
- Responsive design
- Component testing
- Simulated backend integration

---

# Features

## Landing Page
- Displays information about the administrator portal.
- Introduces the purpose of the application.

## Product Management
Administrators can:

- View all products
- Add new products
- Edit product prices and details
- Delete products
- Search products dynamically

## Routing
Implemented using React Router DOM.

Routes include:

| Route | Description |
|---|---|
| `/` | Landing page |
| `/products` | Product listing page |
| `/add-product` | Add product form |
| `*` | Not Found page |

## State Management
The project uses:

- `useState`
- `useContext`
- `useRef`
- Custom hooks

for efficient state handling.

## Simulated Backend
Uses JSON Server to persist product data locally.

## Testing
Unit tests were created using:

- Vitest
- React Testing Library

---

# Technologies Used

- React
- Vite
- React Router DOM
- JSON Server
- Vitest
- React Testing Library
- CSS

---

# Project Structure

```bash
src/
│
├── components/
├── context/
├── hooks/
├── pages/
├── routes/
├── services/
├── mock-data/
├── __tests__/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone github.com/wanja-juma/Personal-Project-Showcase-App.git
```

---

## 2. Navigate Into the Project

```bash
cd Personal-Project-Showcase-App
```

---

## 3. Install Dependencies

```bash
npm install
```

---

# Running the Application

## Start the React Development Server

```bash
npm run dev
```

---

## Start JSON Server

In a separate terminal:

```bash
npx json-server --watch src/mock-data/db.json --port 3001
```

The backend will run at:

```bash
http://localhost:3001/products
```

---

# Running Tests

## Run Vitest

```bash
npm run test
```

---

# Example Product Data

```json
{
  "id": 1,
  "name": "Wireless Headphones",
  "price": 120,
  "category": "Electronics",
  "stock": 15
}
```

---

# Responsive Design

The application is responsive across:

- Desktop
- Tablet
- Mobile devices

Features include:

- Responsive grids
- Flexible layouts
- Adaptive navigation

---

# Known Limitations

- Authentication is not implemented.
- Image uploads use URLs only.
- Product editing currently focuses on price updates.
- No database is connected beyond JSON Server.
- Search functionality filters by product name only.

---

# Future Improvements

Possible enhancements include:

- User authentication
- Dark mode
- Pagination
- Product categories filtering
- Real backend integration
- Toast notifications
- Form validation libraries
- Dashboard analytics

---

# Learning Objectives Achieved

This project demonstrates understanding of:

- React component architecture
- State management
- Client-side routing
- CRUD operations
- API requests
- Responsive UI design
- Testing React applications
- Code organization and reusability

---

# Author

Developed as an E-Commerce Administrator Portal project using React and Vite.
