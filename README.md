# 💸 CashFlow
 
> A Full-Stack Expense Tracking Application built using **React, Vite, Spring Boot, and MySQL**.
 
CashFlow helps users manage daily expenses efficiently by allowing them to add, view, and delete expenses while tracking the overall spending total in real time.
 
---
 
# ✨ Features
 
✅ Add new expenses  
✅ View all expenses  
✅ Delete expenses  
✅ Pagination support  
✅ View grand total of expenses  
✅ Backend API integration  
✅ Responsive UI using Tailwind CSS  
 
---
 
# 🛠️ Tech Stack
 
## 🎨 Frontend
- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔗 Axios
- ✨ Lucide React
 
## ⚙️ Backend
- ☕ Spring Boot
- 🗄️ Spring Data JPA
- 📦 Maven
- 🐬 MySQL
 
---
 
# 📁 Project Structure
 
```bash
CashFlow/
│
├── FrontEnd/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Form.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── BackEnd/
    └── money/
        ├── src/
        │   └── main/
        │       ├── java/
        │       │   └── com/example/money/
        │       │       ├── controller/
        │       │       ├── entity/
        │       │       ├── repository/
        │       │       ├── service/
        │       │       └── MoneyApplication.java
        │       └── resources/
        │           └── application.properties
        └── pom.xml
```
 
---
 
# 📋 Prerequisites
 
Before running the project, make sure the following software is installed on your system:
 
## ✅ Required Software
 
- 🟢 Node.js
- 📦 npm
- ☕ Java 21
- 🔨 Maven
- 🐬 MySQL Server
- 🌐 Git
 
---
 
# 📥 Clone the Repository
 
```bash
git clone https://github.com/guna59129/CashFlow.git
cd CashFlow
```
 
---
 
# ⚙️ Backend Setup
 
## 🧩 Step 1: Create MySQL Database
 
Open MySQL and create a database:
 
```sql
CREATE DATABASE money;
```
 
---
 
## 🔐 Step 2: Configure Database
 
Open the following file:
 
```bash
BackEnd/money/src/main/resources/application.properties
```
 
Update your MySQL credentials:
 
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/money
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
 
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
 
---
 
## 🚀 Step 3: Run Backend Server
 
### 💻 For macOS/Linux
 
```bash
cd BackEnd/money
./mvnw spring-boot:run
```
 
### 🪟 For Windows
 
```bash
cd BackEnd/money
mvnw.cmd spring-boot:run
```
 
✅ Backend runs on:
 
```bash
http://localhost:8080
```
 
---
 
# 🎨 Frontend Setup
 
## 📂 Step 1: Navigate to Frontend
 
```bash
cd FrontEnd
```
 
---
 
## 📦 Step 2: Install Dependencies
 
```bash
npm install
```
 
---
 
## ▶️ Step 3: Start Frontend
 
```bash
npm run dev
```
 
✅ Frontend runs on:
 
```bash
http://localhost:5173
```
 
---
 
# 🔌 API Endpoints
 
## 📄 1. Get All Expenses
 
```http
GET /money?page=0&size=10
```
 
### Example
 
```bash
http://localhost:8080/money?page=0&size=10
```
 
---
 
## ➕ 2. Add Expense
 
```http
POST /money
```
 
### Request Body
 
```json
{
  "description": "Food",
  "amount": 250
}
```
 
---
 
## ❌ 3. Delete Expense
 
```http
DELETE /money/{Id}
```
 
### Example
 
```bash
http://localhost:8080/money/1
```
 
---
 
## 💰 4. Get Grand Total
 
```http
GET /money/total
```
 
### Example
 
```bash
http://localhost:8080/money/total
```
 
---
 
# ⚡ How the Application Works
 
1️⃣ User enters expense details in the frontend.  
2️⃣ React frontend sends requests to Spring Boot backend using Axios.  
3️⃣ Backend stores expense data in MySQL.  
4️⃣ Expenses are fetched and displayed with pagination.  
5️⃣ Grand total is calculated from all expenses.  
 
---
 
# 📦 Frontend Dependencies
 
```json
{
  "axios": "^1.11.0",
  "lucide-react": "^0.539.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1"
}
```
 
---
 
# 🧱 Backend Dependencies
 
- 🌱 Spring Boot Starter Web
- 🗄️ Spring Boot Starter Data JPA
- 🐬 MySQL Driver
 
---
 
# 💻 Commands Reference
 
## 🎨 Frontend
 
### 📦 Install Packages
 
```bash
npm install
```
 
### ▶️ Start Development Server
 
```bash
npm run dev
```
 
### 🏗️ Build Project
 
```bash
npm run build
```
 
---
 
## ⚙️ Backend
 
### ▶️ Run Application
 
```bash
./mvnw spring-boot:run
```
 
### 📦 Build JAR File
 
```bash
./mvnw clean install
```
 
---
 
# 🚀 Future Improvements
 
- ✏️ Edit expenses
- 🗂️ Expense categories
- 🔐 Authentication
- 📊 Monthly analytics
- 📈 Charts and graphs
- 🌙 Dark mode
- 📤 Export reports
 
---
 
# ❗ Common Errors
 
## 🐬 MySQL Connection Error
 
Make sure:
 
- ✅ MySQL server is running
- ✅ Database name is correct
- ✅ Username and password are correct
 
---
 
## ⚠️ Port Already in Use
 
If port `8080` or `5173` is already in use:
 
Change backend port in:
 
```properties
server.port=8081
```
 
Or stop the running application using the port.
 
---
 
# 🌍 Deployment
 
## 🎨 Frontend Deployment
 
You can deploy the frontend using:
 
- ▲ Vercel
- 🌐 Netlify
 
## ⚙️ Backend Deployment
 
You can deploy the backend using:
 
- 🚂 Render
- 🚆 Railway
- ☁️ AWS
- 🟣 Heroku
 
---
 
# 👨‍💻 Author
 
## guna59129
 
🔗 GitHub:  
https://github.com/guna59129
 
---
 
# 📜 License
 
This project is open-source and available under the **MIT License**.
 
