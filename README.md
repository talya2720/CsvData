# APIAPP

## Overview
APIAPP is a web application designed with a multi-container architecture using Docker. The application includes two main components:
- **Frontend (my-app)**: A React-based application providing the user interface for uploading data and interacting with the backend.
- **Backend (server)**: A Node.js application that processes uploaded files, validates the data, and interacts with the database.

The application is designed to be fully containerized using Docker and Docker Compose, ensuring seamless deployment and scalability.

## Features
- **Frontend**:
  - User-friendly interface built with React.
  - Upload and preview files before processing.
  - Display data fetched from the backend.
- **Backend**:
  - File processing and validation.
  - Handles business logic through a modular architecture (controllers, services, etc.).
  - Configurable environment variables for flexible deployment.
- **Dockerized Setup**:
  - Both frontend and backend are containerized with Docker.
  - Managed through a single `docker-compose.yml` file.

## Project Structure

```
APIAPP/
├── my-app/              # Frontend application
│   ├── build/          # Compiled React app
│   ├── node_modules/   # Frontend dependencies (ignored by Git)
│   ├── public/         # Static assets (e.g., index.html, images)
│   ├── src/            # Source code for React components
│   │   └── ...         # Includes components and assets
│   ├── .gitignore      # Ignore file for Git
│   ├── Dockerfile      # Dockerfile for frontend container
│   ├── package-lock.json
│   ├── package.json    # Frontend dependencies
│   └── README.md       # Frontend documentation
├── server/             # Backend application
│   ├── config/         # Configuration files (e.g., database setup)
│   ├── controllers/    # Controllers managing API endpoints
│   ├── node_modules/   # Backend dependencies (ignored by Git)
│   ├── services/       # Business logic and helper functions
│   ├── uploads/        # Temporary folder for uploaded files
│   ├── .gitignore      # Ignore file for Git
│   ├── Dockerfile      # Dockerfile for backend container
│   ├── package-lock.json
│   ├── package.json    # Backend dependencies
│   ├── server.js       # Main entry point for the backend
│   └── .env            # Environment variables
├── .gitignore          # Global ignore file
├── docker-compose.yml  # Docker Compose configuration file
└── README.md           # This file
```

## Prerequisites
Make sure you have the following tools installed on your system:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd APIAPP
```

### 2. Build and Start the Containers

Run the following command to build and start the Docker containers:

```bash
docker-compose up --build
```

### 3. Access the Application

- Frontend: Open your browser and navigate to `http://localhost:80`.
- Backend: API is accessible at `http://localhost:8000`.

### 4. Stop the Containers

To stop the running containers, use:

```bash
docker-compose down
```

## Environment Variables
The backend uses an `.env` file to configure the application. Below are the required environment variables:

```
PORT=8000
DB_HOST=mssql
DB_USER=database_user
DB_PASSWORD=database_password
DB_NAME=CsvData
```

## Key Files and Configuration

### Frontend (`my-app`)
- **Dockerfile**: Defines the setup for the React application.
- **public/**: Contains static files like `index.html`.
- **src/**: Contains React components and logic.

### Backend (`server`)
- **Dockerfile**: Defines the setup for the Node.js backend.
- **controllers/**: API routes and endpoint logic.
- **services/**: Business logic and helper functions.
- **uploads/**: Directory for temporary file storage.
- **server.js**: Main server entry point.

### Docker Compose
- **docker-compose.yml**: Orchestrates the frontend and backend containers. Configures networks, volumes, and ports.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.