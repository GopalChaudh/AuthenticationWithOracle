﻿# Authentication using Oracle DataBase!

---

# Node.js User Authentication with OracleDB and Express

This Node.js application provides user authentication functionalities using OracleDB for database operations and Express.js for the backend.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Database Operations](#database-operations)
- [Server Setup](#server-setup)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a Node.js application that demonstrates user authentication features using OracleDB as the database and Express.js for the backend. It includes functions to insert users into the database, retrieve user details, compare passwords securely using bcrypt, and sets up an Express server to handle authentication endpoints.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/authentication-app.git`
2. Move into the project directory: `cd authentication-app`
3. Install dependencies: `npm install`

## Usage

Start the application:

```bash
npm start
```

This command launches the server, enabling authentication functionalities.

## Database Operations

### `insertUser(id, name, email, password, timeStamp)`

Inserts user details into the OracleDB USERS table.

### `GetUser(email, password)`

Retrieves user details based on the provided email. It securely compares the password using bcrypt.

### `CreateUserTable()`

Creates a USERS table in the OracleDB with columns for id, name, email, password, and timeStamp.

## Server Setup

The application uses Express.js for server setup:

- Middleware for parsing JSON and URL-encoded data.
- Mounts an `/auth` route to handle authentication-related endpoints.

## Endpoints

- `/auth`: Manages authentication-related operations, including user login, registration, and verification.

## Contributing

Feel free to contribute to this project by following these steps:
- Fork the repository
- Create a new branch (`git checkout -b feature`)
- Make changes and commit (`git commit -am 'Add feature'`)
- Push to the branch (`git push origin feature`)
- Create a pull request

## License

This project does not currently have a specified license.

---
