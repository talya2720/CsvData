# השתמש בתמונה של Ubuntu 20.04
FROM ubuntu:20.04 AS build

# עדכן את החבילות והתקן את הצרכים הבסיסיים
RUN apt-get update && apt-get install -y curl apt-transport-https

# הוסף את מפתח ה-GPG של Microsoft
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

# הוסף את מאגר החבילות של MSSQL
RUN curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list

# עדכן את החבילות והתקן את MSSQL tools
RUN apt-get update
RUN apt-get install -y mssql-tools

# התקן תלות נוספות אם נדרשות
RUN apt-get install -y unixodbc

# התקן את שאר החבילות של Node.js
FROM node:18-alpine AS app

WORKDIR /app

# העתק את קובצי ה-node.js
COPY package*.json ./

RUN npm install

COPY . .

# הגדר את הפורט שיהיה פתוח
EXPOSE 8000

# הפעל את האפליקציה
CMD ["npm", "start"]
