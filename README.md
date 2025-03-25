# MyShop - E-commerce Application

A full-stack e-commerce application built with Spring Boot and React.

## Features

- User authentication and authorization
- Product management
- Shopping cart functionality
- Order management
- Category management
- Responsive design

## Tech Stack

### Backend
- Spring Boot 3.2.3
- Spring Security with JWT
- Spring Data JPA
- MySQL 8.0
- Maven

### Frontend
- React 18
- Redux Toolkit
- React Router
- Bootstrap 5
- Axios

## Prerequisites

- Java 17 or later
- Node.js 18 or later
- MySQL 8.0
- Maven
- npm or yarn

## Setup Instructions

### Backend Setup

1. Clone the repository
2. Navigate to the project root directory
3. Configure MySQL database:
   ```sql
   CREATE DATABASE myshop;
   ```
4. Update `src/main/resources/application.properties` with your database credentials
5. Run the application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- POST /api/auth/logout - Logout user

### Products
- GET /api/products - Get all products
- GET /api/products/{id} - Get product by ID
- GET /api/products/category/{categoryId} - Get products by category

### Categories
- GET /api/categories - Get all categories
- GET /api/categories/{id} - Get category by ID

### Cart
- GET /api/cart - Get user's cart
- POST /api/cart - Add item to cart
- PUT /api/cart/{id} - Update cart item
- DELETE /api/cart/{id} - Remove item from cart

### Orders
- POST /api/orders - Create new order
- GET /api/orders - Get user's orders
- GET /api/orders/{id} - Get order by ID

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 