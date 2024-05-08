# Budget Envelope API

This project implements a simple budget envelope system using Node.js and Express. It allows users to manage budget envelopes and perform operations like creating, retrieving, updating, transferring, and deleting envelopes. This README outlines the steps to set up and interact with the API.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Git**: A distributed version control system to handle project versioning.
- **GitHub**: A platform for version control and collaboration.
- **Postman**: A tool used to test APIs during development.

## Getting Started

### Prerequisites

- Node.js
- npm (Node package manager)
- Git
- Postman (for testing the API)

### Installation
   
   1. Clone the repository: git clone https://github.com/vivekvardhank/Envelope_backend.git.
   2. cd Envelope_backend.
   3. npm install.
   4. npm start.
      
### API Endpoints

Each endpoint manipulates or displays information related to the budget envelopes:

#### Retrieve All Envelopes

- **GET `/`**
  - **Functionality**: Retrieves all budget envelopes.
  - **Response Example**:
    ```json
    [
      {"id": 1, "name": "Groceries", "budget": 300},
      {"id": 2, "name": "Rent", "budget": 1200}
    ]
    ```

#### Create a New Envelope

- **POST `/`**
  - **Middleware**: `validateRequest` - Ensures all required fields are present and valid.
  - **Request Example**:
    ```json
    {"name": "Utilities", "budget": 150}
    ```
  - **Response Example**:
    ```json
    {"id": 3, "name": "Utilities", "budget": 150}
    ```

#### Transfer Budget Between Envelopes

- **POST `/:fromId/:toId`**
  - **Parameters**:
    - `fromId`: ID of the envelope to transfer funds from.
    - `toId`: ID of the envelope to transfer funds to.
  - **Request Example**:
    ```json
    {"amount": 50}
    ```
  - **Response Example**:
    ```json
    {"message": "Transfer successful"}
    ```

#### Update an Envelope

- **PUT `/:id`**
  - **Parameters**: `id` - ID of the envelope to update.
  - **Request Example**:
    ```json
    {"name": "Entertainment", "budget": 250}
    ```
  - **Response Example**:
    ```json
    {"id": 1, "name": "Entertainment", "budget": 250}
    ```

#### Delete an Envelope

- **DELETE `/:id`**
  - **Parameters**: `id` - ID of the envelope to delete.
  - **Response Example**:
    ```json
    {"message": "Envelope deleted"}
    ```

