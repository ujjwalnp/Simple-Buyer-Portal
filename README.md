# Simple Buyer Portal

A full-stack property management application built with React and Express.js. This app allows users to browse properties, and maintain a personalized list of favorites.

## Getting Started

1. **Clone the Repository**
    ```bash
    https://github.com/ujjwalnp/Simple-Buyer-Portal
    cd Simple-Buyer-Portal
    ```

2. **Backend Setup**

    1. Navigate to the backend folder:
        ```bash
        cd backend
        ```
    2. Install dependencies:
        ```bash
        npm install
        ```
    3. Configure Environment:

        - Copy `.env.example` to `.env`:
            ```bash
            cp .env.example .env
            ```
        - Open `.env` and add required environment variables.
    4. Seed the Database to add properties (Required):
        ```bash
        npm run seed
        ```
    5. Start the server:
        ```bash
        npm run dev
        ```

3. **Frontend Setup**

    1. Open a new terminal and navigate to the frontend folder:
        ```bash
        cd frontend
        ```
    2. Install dependencies:
        ```bash
        npm install
        ```
    3. Configure Environment:

        - Copy `.env.example` to `.env`:
            ```bash
            cp .env.example .env
            ```
        - Open `.env` and add required environment variables.
    4. Start the app:
        ```bash
        npm run dev
        ```

## App Flow & Navigation

The application follows a standard authentication and interaction lifecycle:

1. **Onboarding (Sign Up → Login)**:

    - **Visit Site**: Navigating to `http://127.0.0.1:5173/` automatically redirects unauthenticated users to `/login`.
    - **Registration**: Click "Register An Account" to create an account with an email and password. Passwords are encrypted before storage.
    - **Authentication**: Log in with your credentials to receive a JWT.

2. **Dashboard Interaction**

    - **View Profile**: Once logged in, the dashboard displays your name and role (e.g., "Buyer").
    - **Browse Properties**: View the list of properties seeded from the database.
    - **Manage Favourites**:
        - Click the **Heart Icon** on an available property to add it to your "My Favourites" section.
        - Click the **Heart Icon** again (either in the main list or your favorites section) to remove it.

3. **Security Enforcement**

    - **Protected Routes**: If you attempt to access `/` without being logged in, the app redirects you to `/login`.
    - **Ownership**: The backend validates that users can only view or modify their own specific favorites list.

## Features Implemented

- **Auth**: JWT-based authentication with password hashing (Bcrypt).
- **Database**: MongoDB for storing Users, Properties, and Favourites.
- **Validation**: Server-side error handling for login failures and invalid requests.
- **UX**: Real-time UI updates when toggling favorites and clear success/error alerts.