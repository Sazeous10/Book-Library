# 📚 BookLibrary

A **full-stack** Book Library application built with **React (JavaScript, CSS) for the frontend**, **Node.js** for the backend server, and **MongoDB** as the database for storing books.

---

## 🚀 Features

✅ **Add, Update, Delete Books** – Easily manage your book collection.
✅ **View All Books** – Display books with details like title, author, genre, and description.
✅ **Search & Filter** – Find books using search and category filters.
✅ **RESTful API** – Backend serves data via secure RESTful API.
✅ **Modern UI** – Built with React and responsive CSS for a seamless experience.
✅ **MongoDB Database** – Efficiently stores and retrieves book information.

---

## 🛠️ Tech Stack

### Frontend (**React** - in `client/` folder):
- React (JavaScript)
- CSS (Styled components or plain CSS)
- Axios (for API requests)

### Backend (**Node.js/Express** - in `server/` folder):
- Node.js with Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- dotenv for environment variable management

---

## 📂 Project Structure

```
📂 BookLibrary
├── 📂 client (Frontend)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── 📂 server (Backend)
│   ├── server.js
│   ├── config/
│   ├── package.json
│
└── README.md
```

---

## 🏗️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/BookLibrary.git
cd BookLibrary
```

### 2️⃣ Backend Setup (Server)
```bash
cd server
npm install  # Install dependencies
```

Create a `.env` file inside the `server` folder and add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:
```bash
npm start
```

### 3️⃣ Frontend Setup (Client)
```bash
cd ../client
npm install  # Install dependencies
npm start    # Start frontend React app
```

---

## 🌟 Future Enhancements
- 📌 User authentication (Login/Register)
- 📌 Reviews and Ratings for books
- 📌 Book borrowing system
- 📌 Cloud storage for book covers

---

