# Database Setup

This guide explains how to set up the PostgreSQL database for the psychometric-test-app using Sequelize ORM.

## Prerequisites

- PostgreSQL (local installation or cloud instance)
- Sequelize CLI

## Steps to Set Up

### 1. Install PostgreSQL

#### Windows
- Download and install PostgreSQL from [PostgreSQL Downloads](https://www.postgresql.org/download/).
- During installation, set a username and password for the PostgreSQL superuser.

#### macOS
- Use Homebrew to install PostgreSQL:
  ```bash
  brew install postgresql
  ```
- Start the PostgreSQL service:
  ```bash
  brew services start postgresql
  ```

#### Linux
- Use your package manager to install PostgreSQL:
  ```bash
  sudo apt update
  sudo apt install postgresql postgresql-contrib
  ```
- Start the PostgreSQL service:
  ```bash
  sudo systemctl start postgresql
  ```

### 2. Create the Database
- Access the PostgreSQL shell:
  ```bash
  psql -U postgres
  ```
- Create a new database:
  ```sql
  CREATE DATABASE psychometric_test;
  ```

### 3. Install Sequelize CLI
Install Sequelize CLI globally:
```bash
npm install -g sequelize-cli
```

### 4. Configure Sequelize
- Navigate to the `backend` folder:
  ```bash
  cd /Users/akulagarwal/Documents/psychometric-test-app/backend
  ```
- Initialize Sequelize:
  ```bash
  npx sequelize-cli init
  ```
- Update the `config/config.json` file with your PostgreSQL credentials:
  ```json
  {
    "development": {
      "username": "myuser",
      "password": "mypassword",
      "database": "mydb",
      "host": "localhost",
      "dialect": "postgres"
    }
  }
  ```

### 5. Define Models and Migrations
- **Users Table**:
  Create a model and migration:
  ```bash
  npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,role:string
  ```
  Update the migration file to include timestamps.

- **Tests Table**:
  ```bash
  npx sequelize-cli model:generate --name Test --attributes title:string,description:string
  ```

- **Questions Table**:
  ```bash
  npx sequelize-cli model:generate --name Question --attributes questionText:string,options:json,correctAnswer:string,testId:integer
  ```

- **Results Table**:
  ```bash
  npx sequelize-cli model:generate --name Result --attributes userId:integer,testId:integer,score:integer
  ```

### 6. Run Migrations
Run all migrations to create tables:
```bash
npx sequelize-cli db:migrate
```

### 7. Seed Data (Optional)
Create seeders to populate initial data:
```bash
npx sequelize-cli seed:generate --name demo-user
```
Run seeders:
```bash
npx sequelize-cli db:seed:all
```

## Additional Notes

- Use a GUI tool like pgAdmin or DBeaver for database management.
- Ensure proper indexing for optimized queries.
