# Backend Setup

This guide explains how to set up the backend of the psychometric-test-app locally with PostgreSQL and Sequelize ORM.

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)
- PostgreSQL (local or cloud instance)
- Sequelize CLI

## Steps to Set Up

1. **Clone the Repository**  
   Navigate to the `backend` folder:
   ```bash
   cd /Users/akulagarwal/Documents/psychometric-test-app/backend
   ```

2. **Install Dependencies**  
   Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root of the `backend` folder and add the following variables:
   ```
   PORT=5000
   DB_USERNAME=myuser
   DB_PASSWORD=mypassword
   DB_DATABASE=mydb
   DB_HOST=localhost
   DB_DIALECT=postgres
   ```

4. **Run Migrations**  
   Ensure the database is set up and run migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Run the Server**  
   Start the backend server:
   ```bash
   npm start
   ```

6. **Test the API**  
   Use tools like Postman or curl to test the API endpoints at `http://localhost:5000/api`.

## Additional Notes

- Ensure PostgreSQL is running locally or provide a valid connection string for a cloud instance.
- Use `npm run dev` for development mode with hot-reloading.
