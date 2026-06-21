# ??? Luxury E-Commerce Website

> A sophisticated, full-stack e-commerce platform showcasing premium products with a seamless shopping experience.

A modern full-stack e-commerce application built with **Next.js**, **React.js**, **TypeScript**, **MongoDB**, and **Formspree**. This project demonstrates professional development practices including server-side rendering, API design, state management, and responsive UI design suitable for a production-ready platform.

---

## ?? Table of Contents

- [Project Overview](#project-overview)
- [Features](#-features)
- [Technologies Used](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Running the Project](#-running-the-project)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Usage Guide](#-usage-guide)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## Project Overview

This e-commerce platform provides a complete shopping experience with product browsing, cart management, user authentication, and admin capabilities. The application features a luxury brand aesthetic with responsive design, modern UI components, and smooth user interactions. Built with scalability and performance in mind, it serves as an excellent portfolio project demonstrating full-stack development expertise.

**Key Highlights:**
- Luxury brand positioning with premium UI/UX
- Full user authentication system
- Admin dashboard for product management
- Shopping cart with persistent state
- Product catalog with categories and filtering
- Contact management via Formspree integration
- Responsive design optimized for all devices

---

## ?? Features

### Frontend Features
- ? **Responsive Design** - Mobile-first approach with Tailwind CSS
- ?? **Product Browsing** - Dynamic product listings with detail pages
- ??? **Shopping Cart** - Add/remove items with state persistence using Zustand
- ?? **Product Filtering** - Category-based and search functionality
- ?? **Modern UI Components** - Reusable, well-organized components
- ? **Performance Optimized** - Next.js App Router with server-side rendering

### Backend Features
- ?? **User Authentication** - Secure signup/login system
- ?? **Product Management** - RESTful API for product operations
- ??? **MongoDB Integration** - Persistent data storage
- ????? **Admin Panel** - Dashboard for managing products and orders
- ?? **Contact Form Integration** - Email submissions via Formspree
- ?? **Cart Management** - Server-side order tracking

---

## ??? Tech Stack

### Frontend
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **UI Library:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons:** lucide-react
- **Components:** Custom component architecture

### Backend
- **Runtime:** Node.js
- **API Framework:** Next.js API Routes
- **Database:** MongoDB
- **Database Client:** Mongoose (implied by project structure)
- **Authentication:** Custom JWT-based system (implied)

### Additional Tools
- **Form Management:** Formspree
- **Build Tool:** Next.js (built-in)
- **Package Manager:** npm

---

## ?? Project Structure

``
<<<<<<< HEAD
```
e-commerce-website/
│
├── public/
│   └── images/
│       ├── journal/
│       ├── lookbook/
│       └── products/
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── admin/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   └── signup/
│   │   │   └── products/
│   │   ├── auth/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── collections/
│   │   ├── contact/
│   │   ├── login/
│   │   ├── product/
│   │   ├── signup/
│   │   └── story/
│   │
│   ├── components/
│   │   ├── home/
│   │   │   ├── ArtisanSection.tsx
│   │   │   ├── BrandPhilosophy.tsx
│   │   │   ├── FeaturedCollections.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Journal.tsx
│   │   │   ├── Lookbook.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── Timeline.tsx
│   │   │
│   │   └── ui/
│   │       ├── Footer.tsx
│   │       └── TopNavBar.tsx
│   │
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── mongodb.ts
│   │   └── types.ts
│   │
│   ├── models/
│   │   └── User.ts
│   │
│   └── store/
│       ├── orderStore.ts
│       └── useCartStore.ts
│
├── node_modules/
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── package.json
├── package-lock.json
└── README.md
```
=======
.
+-- public/                          # Static files
�   +-- images/
�       +-- journal/                 # Blog/journal images
�       +-- lookbook/                # Marketing lookbook images
�       +-- products/                # Product images
�
+-- src/
�   +-- app/                         # Next.js App Router (Pages & Layouts)
�   �   +-- globals.css              # Global styles
�   �   +-- layout.tsx               # Root layout
�   �   +-- page.tsx                 # Home page
�   �   +-- admin/                   # Admin dashboard
�   �   +-- api/                     # API endpoints
�   �   �   +-- auth/                # Authentication routes
�   �   �   �   +-- login/
�   �   �   �   +-- signup/
�   �   �   +-- products/            # Product management endpoints
�   �   +-- auth/                    # Authentication pages
�   �   +-- cart/                    # Shopping cart page
�   �   +-- checkout/                # Checkout page
�   �   +-- collections/             # Product collections
�   �   +-- contact/                 # Contact page (Formspree)
�   �   +-- login/                   # Login page
�   �   +-- product/                 # Individual product pages
�   �   +-- signup/                  # Registration page
�   �   +-- story/                   # Brand story page
�   �
�   +-- components/                  # Reusable React components
�   �   +-- home/                    # Homepage sections
�   �   �   +-- ArtisanSection.tsx
�   �   �   +-- BrandPhilosophy.tsx
�   �   �   +-- FeaturedCollections.tsx
�   �   �   +-- HeroSection.tsx
�   �   �   +-- Journal.tsx
�   �   �   +-- Lookbook.tsx
�   �   �   +-- Newsletter.tsx
�   �   �   +-- Timeline.tsx
�   �   +-- ui/                      # UI components
�   �       +-- Footer.tsx
�   �       +-- TopNavBar.tsx
�   �
�   +-- lib/                         # Utilities and configurations
�   �   +-- auth.ts                  # Authentication logic
�   �   +-- mongodb.ts               # MongoDB connection
�   �   +-- types.ts                 # TypeScript type definitions
�   �
�   +-- models/                      # Database models
�   �   +-- User.ts                  # User schema/model
�   �
�   +-- store/                       # Zustand state management
�       +-- orderStore.ts            # Order state
�       +-- useCartStore.ts          # Shopping cart state
�
+-- node_modules/                    # Dependencies
+-- next.config.ts                   # Next.js configuration
+-- tsconfig.json                    # TypeScript configuration
+-- tailwind.config.ts               # Tailwind CSS configuration
+-- postcss.config.mjs               # PostCSS configuration
+-- package.json                     # Project dependencies
+-- package-lock.json                # Dependency lock file
+-- README.md                        # This file
``

---
>>>>>>> 43f6d02 (New products added)

## ?? Installation & Setup

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud-hosted, e.g., MongoDB Atlas)
- **Formspree** account for contact form handling (optional)

### Step 1: Clone the Repository

``ash
<<<<<<< HEAD
git clone https://github.com/Muhummad-Sami/Ecommerce.git
=======
git clone https://github.com/your-username/ecom-luxury.git
cd ecom-luxury
>>>>>>> 43f6d02 (New products added)
``

### Step 2: Install Dependencies

``ash
npm install
``

### Step 3: Configure Environment Variables

Create a .env.local file in the root directory with the following variables:

``env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Authentication (if using JWT)
JWT_SECRET=your_jwt_secret_key

# Formspree Integration
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
``

### Step 4: Set Up MongoDB

1. Create a MongoDB database (local or using MongoDB Atlas)
2. Update MONGODB_URI with your connection string
3. Ensure the connection is tested before running the app

---

## ?? Running the Project

### Development Mode

``ash
npm run dev
``

The application will start at: **http://localhost:3000**

### Production Build

``ash
npm run build
npm start
``

### Linting

``ash
npm run lint
``

---

## ?? API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Fetch all products |
| GET | /api/products/[id] | Fetch product by ID |
| POST | /api/products | Create a new product (admin) |
| PUT | /api/products/[id] | Update product (admin) |
| DELETE | /api/products/[id] | Delete product (admin) |

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/signup | User registration |
| POST | /api/auth/login | User login |

### Request/Response Examples

**Get All Products:**
``ash
curl -X GET http://localhost:3000/api/products
``

**Get Product by ID:**
``ash
curl -X GET http://localhost:3000/api/products/product-id-here
``

**User Signup:**
``ash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword",
    "name": "User Name"
  }'
``

---

## ?? Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| MONGODB_URI | Yes | MongoDB connection string |
| JWT_SECRET | Yes | Secret key for JWT authentication |
| NEXT_PUBLIC_FORMSPREE_ID | No | Formspree form ID for contact forms |
| NEXT_PUBLIC_API_URL | No | Base URL for API calls |

---

## ?? Usage Guide

### For Users
1. **Browse Products** - Visit the home page to explore featured collections
2. **View Details** - Click on products to see detailed information
3. **Add to Cart** - Use the "Add to Cart" button to add items
4. **Checkout** - Proceed to checkout and complete your order
5. **User Account** - Sign up or log in to track orders
6. **Contact** - Use the contact form to reach customer support

### For Administrators
1. **Access Admin Panel** - Navigate to /admin (requires authentication)
2. **Manage Products** - Add, edit, or remove products from the catalog
3. **View Orders** - Monitor customer orders and manage fulfillment
4. **User Management** - Manage user accounts and permissions

---

## ?? Future Improvements

### High Priority
- ?? **Advanced Security** - Implement rate limiting, CSRF protection
- ?? **Payment Integration** - Stripe or PayPal integration
- ?? **PWA Features** - Offline support and app-like experience
- ?? **Notifications** - Email notifications for order status

### Medium Priority
- ??? **Image Upload System** - Admin capability to upload product images
- ?? **Advanced Search** - Full-text search with filters and facets
- ? **Review System** - Customer reviews and ratings
- ?? **Analytics Dashboard** - Sales and traffic analytics
- ?? **Inventory Management** - Real-time stock tracking

### Future Enhancements
- ?? **Internationalization (i18n)** - Multi-language support
- ?? **Live Chat** - Customer support integration
- ?? **Email Marketing** - Newsletter and promotional campaigns
- ?? **Loyalty Program** - Rewards and discounts system
- ?? **Shipment Tracking** - Integration with shipping providers

---

## ?? Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create a branch** for your feature: git checkout -b feature/AmazingFeature
3. **Commit** your changes: git commit -m 'Add AmazingFeature'
4. **Push** to the branch: git push origin feature/AmazingFeature
5. **Submit a Pull Request** with a clear description

---

## ?? License

This project is open-source and available under the **MIT License**. See LICENSE file for details.

---

## ????? Author

Developed by **Sami Abid**

<<<<<<< HEAD
## ?? Acknowledgments

- Next.js and React communities
- MongoDB documentation
- Tailwind CSS for beautiful styling
- Zustand for simple state management

---

=======
- GitHub: [your-github-profile](https://github.com/your-username)
- Portfolio: [your-portfolio](https://yourportfolio.com)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

---

## ?? Acknowledgments

- Next.js and React communities
- MongoDB documentation
- Tailwind CSS for beautiful styling
- Zustand for simple state management

---

>>>>>>> 43f6d02 (New products added)
? **If you like this project, please star the repository!** It helps more developers discover this work.
