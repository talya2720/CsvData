# CsvData

## Overview
CsvData is a multi-container system designed using Docker, consisting of the following components:
- **Backend API**: A Node.js application that processes CSV file uploads, validates the data, and stores the valid records in a SQL Server database.
- **Frontend**: A React-based web interface that allows users to upload CSV files and view the stored data.
- **MSSQL Database**: A SQL Server container for storing the validated data.

The project is designed to be fully containerized using Docker and Docker Compose, enabling seamless management of multiple services in a single environment.

## Features
- **CSV Upload**: Upload CSV files through the frontend interface, which are processed by the backend.
- **Data Validation**: The backend validates data from the CSV file and ensures only unique records are stored in the database.
- **Data Viewing**: The frontend displays the data stored in the SQL Server database in an organized and easy-to-read format.
- **Dockerized Setup**: The project is containerized using Docker, simplifying the process of setting up and managing the services.

## Prerequisites
Ensure you have the following software installed on your machine:
- [Docker](https://www.docker.com/get-started) (latest version recommended)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Visual Studio Code](https://code.visualstudio.com/) (optional, but recommended for development)

## Project Structure

/CsvData │ ├── /backend # Node.js Backend API │ ├── Dockerfile # Dockerfile for the Backend API container │ ├── server.js # Main server entry point │ ├── package.json # Node.js dependencies │ ├── node_modules # Node.js modules (ignored by git) │ ├── /frontend # React Frontend │ ├── Dockerfile # Dockerfile for the Frontend container │ ├── package.json # Node.js dependencies for React │ ├── /public/ # Public assets (index.html, images, etc.) │ ├── /src/ # React components and assets │ │ ├── App.js # Main React component │ │ ├── /components/ # UI components │ │ └── /assets/ # Static files (images, fonts) │ ├── /mssql # SQL Server Database Container │ ├── Dockerfile.mssql # Dockerfile for the MSSQL Server container │ ├── /docker # Docker Compose & related configuration files │ ├── docker-compose.yml # Docker Compose file for orchestrating the containers │ ├── .gitignore # Git ignore file │ ├── README.md # This file └── └── LICENSE # Project License (e.g., MIT)


### Description of Project Components

#### Backend (`/backend`)

The **Backend API** is built using Node.js and handles the processing of uploaded CSV files. It performs the following tasks:
- Validates the data in the CSV file.
- Inserts valid records into the SQL Server database.
- Exposes an API endpoint to interact with the frontend.

- **Dockerfile**: Defines the setup and build instructions for the backend container, specifying Node.js as the base image and copying the necessary files.
- **server.js**: The main entry point for the backend application. It handles API requests and connects to the MSSQL database.
- **package.json**: Contains the backend dependencies (e.g., Express, Sequelize) and the necessary scripts.
- **node_modules**: Directory containing the installed Node.js dependencies (ignored by Git).

#### Frontend (`/frontend`)

The **Frontend** is built using React, and it provides a user interface for uploading CSV files and viewing the stored data. It includes:
- A form for file upload.
- A display for showing the uploaded and stored data.

- **Dockerfile**: Defines the setup for building the frontend container, specifying Node.js and React build steps.
- **package.json**: Contains the React app's dependencies.
- **public/**: The public assets folder that contains static files like the `index.html` template and any images or fonts.
- **src/**: The source code for the React application, including components and assets.
  - **App.js**: The main React component that handles the routing and rendering of the app.
  - **components/**: Contains reusable UI components (e.g., buttons, forms, data tables).
  - **assets/**: Stores static files like images and fonts.

#### MSSQL Database (`/mssql`)

The **SQL Server Database** stores the validated data. It is set up using a Docker container running Microsoft SQL Server.

- **Dockerfile.mssql**: Defines the setup for the MSSQL container, including the necessary environment variables like the SA password.

#### Docker & Docker Compose (`/docker`)

- **docker-compose.yml**: The Docker Compose configuration file orchestrates the three services (backend, frontend, and MSSQL). It specifies the build paths, ports, networks, and service dependencies.

---

## Getting Started

Follow these steps to get the project up and running:

### 1. Clone the Repository

Clone the repository to your local machine and navigate into the project directory:

```bash
git clone <repository-url>
cd <project-directory>
