# MVC Sample APIs for Login and Signup in Node.js

This repository contains a sample Node.js application that demonstrates the use of the Model-View-Controller (MVC) architecture to create a secure user authentication system with login and signup functionality. The application uses the `bcrypt` module for password hashing and validation.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/parthkumar123/NodeLoginSignupBcrypt.git
   ```

2. **Install Dependencies**

   ```bash
   cd NodeLoginSignupBcrypt
   npm install
   ```

3. **Configuration**

   Create a `development.env` file in the root of the project and configure the following environment variables:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017
   ```

4. **Database Setup**

   Ensure you have a MongoDB server running locally or provide the appropriate connection string in the `development.env` file.

5. **Run the Application**

   ```bash
   npm run dev
   ```

   This will start the Node.js server at the specified port (default: 3000).

6. **Access the Application**

   Open your web browser and navigate to `http://localhost:3000` to access the sample application.

## Project Structure

The project is structured using the Model-View-Controller (MVC) pattern for better organization. Here's a brief overview of the project structure:

- `controllers/`: Contains the controller logic for handling user authentication, requests, and responses.
- `models/`: Defines the data models and schema for user accounts.
- `routes/`: Specifies the routes for login, signup, and other API endpoints.
- `utils/`: Utility functions, such as password hashing with `bcrypt`.
- `index.js`: The main entry point for the application.

## Usage

This project provides the following API endpoints:

- `POST /api/signup`: Register a new user with a username and password. Passwords are securely hashed with `bcrypt`.
- `POST /api/login`: Authenticate a user by providing a username and password. 

You can use tools like `curl` or Postman to interact with these API endpoints.

## License

This project is licensed under the MIT License.