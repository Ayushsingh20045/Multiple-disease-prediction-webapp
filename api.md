# 🧠 Node.js Server API Routes — Multiple Disease Prediction App

This file contains all the API endpoints used in the **MERN + ML Disease Prediction Project**  
along with their HTTP methods and short descriptions.

---

## 🔍 Prediction Routes

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/predict/diabetes` | **POST** | Calls Flask ML API to predict **Diabetes** based on user input data. |
| `/api/predict/heart` | **POST** | Calls Flask ML API to predict **Heart Disease** from input symptoms. |
| `/api/predict/parkinson` | **POST** | Calls Flask ML API to predict **Parkinson’s Disease** condition. |

---

## 👤 User Routes

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/users/signup` | **POST** | Registers a **new user** and stores data in MongoDB. |
| `/api/users/login` | **POST** | Authenticates **user credentials** and allows login access. |

---

## 💬 Contact Routes

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/contact` | **POST** | Saves **contact form data** submitted by users. |

---

## ℹ️ About Route

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/about` | **GET** | Fetches **about section details** (optional static content). |

---

### 🧩 Notes
- All `/api/predict/*` routes internally call your **Flask ML model endpoints**.  
- `/api/users/*` routes communicate with the **MongoDB database**.  
- You can test these routes using **Postman** before connecting the frontend.
