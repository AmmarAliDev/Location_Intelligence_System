# Location Intelligence Service Frontend

## Getting Started

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/AmmarAliDev/Location_Intelligence_System.git
```

### Step 2: Navigate to the Frontend Directory

Open a terminal and enter the following command to navigate to the project directory:

```sh
cd Location_Intelligence_System
```

## Frontend Setup

### Step 3: Navigate to the Frontend Directory

```sh
cd frontend
```

### Step 4: Install Dependencies

Enter the following command to install the necessary dependencies:

```sh
npm i
```

### Step 5: Create .env

Create a .env file in the root of the frontend folder and paste below variables

```sh
VITE_API_HOST = http://localhost:5000
```
```sh
VITE_GOOGLE_MAPS_API_KEY = AIzaSyBDBbqbjXB1eB_TjZIKhNynZkdGVgI3kgs
```
```sh
VITE_GOOGLE_MAPS_ID = 9ee7c2051631b40e
```

### Step 6: Run the Application

Enter the following command to run the application locally:

```sh
npm run dev
```

### NOTE

There is an edit button that shows on the top right of the map which opens up the form to add a new tracker/vehicle.

## Backend Setup

### Step 1: Navigate back to the Root Directory

Open another terminal and enter the following command to navigate back to the root directory:

```sh
cd ..
```

### Step 2: Navigate to the Backend Directory

```sh
cd backend
```

### Step 3: Install Dependencies

Enter the following command to install the necessary dependencies:

```sh
npm i
```

### Step 4: Create .env

Create a .env file in the root of the backend folder and paste below variables

```sh
DB_URI=mongodb+srv://ammarali:sAWqf9B8uegSiQiJ@cluster0.polp1.mongodb.net/
```

```sh
PORT=5000
```

### Step 5: Run the Application

Enter the following command to run the application locally:

```sh
node server.js
```

### Time Estimation for development

It took around 12 to 13 hours to complete this project
