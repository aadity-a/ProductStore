# Product Listing App

This is a full-stack web application that features a Product Listing Page with filtering and sorting capabilities. 

The application is built using Tech stack:
- **Frontend**: React (with Vite) 
- **Backend**: Spring Boot (Java 17)

## Features

- **Product Display**: View a list of products with images, names, prices, and categories.
- **Filtering**: Filter products by Category (Electronics, Furniture, Books, Fashion, Accessories) and Price Range (Min/Max Price).
- **Sorting**: Sort products by price (Low to High / High to Low).
- **Dynamic UI**: Optimized to prevent full screen re-renders when filters are applied.
- **Cart**: Basic cart functionality on the frontend.
- **Responsive Design**: Clean and simple user interface.

## Project Structure

The repository is divided into two main parts:

- `frontend/`: The React application built with Vite.
- `backend/`: The Spring Boot REST API.

## Prerequisites

To run this project locally, you will need:
- **Node.js** (v18 or higher recommended) for the frontend.
- **Java 17** (JDK 17) or higher for the backend.
- **Maven** (optional, as the Spring Boot wrapper can be used, but useful for building).

## Getting Started

### 1. Setting up the Backend (Spring Boot)

The backend runs on `localhost:8080` by default and provides a REST API with mock data.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the Spring Boot application:
   - **Using Maven**:
     ```bash
     mvn spring-boot:run
     ```
   - **Using your IDE**: Open the `backend` folder in IntelliJ IDEA, Eclipse, or your preferred IDE, and run the main application class.

The API will be accessible at `http://localhost:8080/api/products`.

### 2. Setting up the Frontend (React + Vite)

The frontend is a React application that communicates with the Spring Boot backend.

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The application will be accessible at the URL provided in the terminal (usually `http://localhost:5173`).

## API Endpoints

### `GET /api/products`

Retrieves a list of products. Supports the following optional query parameters for filtering and sorting:

- `category` (String): Filter by product category (e.g., Electronics).
- `minPrice` (Number): Minimum price limit.
- `maxPrice` (Number): Maximum price limit.
- `sortRule` (String): Sorting order for price, can be `asc` or `desc`. Defaults to `asc`.

## Technologies Used

- **Frontend**: React (Functional Components, Hooks), Vite, CSS.
- **Backend**: Java 17, Spring Boot, Spring Web, Lombok.
