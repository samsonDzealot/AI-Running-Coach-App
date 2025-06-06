# Sarai: AI Running Coach App

## 🏃‍♂️ Project Overview

Sarai is a personalized AI-powered running coach application designed to provide comprehensive guidance and support for runners of all levels. From beginners to experienced middle-distance athletes, Sarai aims to optimize training, prevent injuries, and foster consistent progress through intelligent coaching and robust tracking features. The current prototype demonstrates core functionalities, laying the groundwork for an advanced, interactive training platform.

## ✨ Features

The `Sarai` application is envisioned with a rich set of features to support a runner's journey:

### Core Functionality (MVP Prototype)

* **Basic Training Schedules:** Provides fundamental running training plans.
* **Simple AI Chat:** An interactive chatbot for basic queries and initial coaching interactions.
* **Static Workout Demonstrations:** Offers visual guides for various exercises to ensure proper form.

### Envisioned Advanced Features

* **Professional Running Coach AI Chatbot:**
    * **Personalized Training Calendar Generation:** The AI chatbot will ask detailed questions (current schedule, training history, training goals, upcoming events, etc.) to create a well-structured and exhaustive training calendar covering runs, workouts, and nutritional advice.
    * **Post-Session Feedback & Adaptive Advice:** Users will provide feedback after each session (run, workout, meal). The AI will analyze this feedback to offer appropriate advice (including recovery) and dynamically adjust the training strategy as needed.
    * **Injury Prevention & Calendar Adjustment:** In cases of reported injury, the AI coach can intelligently modify the training calendar, balancing recovery with initial training goals and calendar design.
* **Real GPS Integration for Run Tracking:** Seamlessly tracks runs with real-time GPS data for distance, pace, and route mapping.
* **Real-time Notifications System:** Provides timely alerts for upcoming sessions (workout time, eating time, run time) as per the personalized calendar.
* **Interactive Workout Animations:** Dynamic, motion-captured animations for numerous middle-distance running specific workouts, guiding users through exercises with correct form.
* **Injury Prevention System:** Proactive measures and AI-driven insights to minimize the risk of running-related injuries.
* **Timers and Metric Trackers:** Built-in tools for timing runs and workouts, along with tracking key performance metrics over time.

## 💻 Technologies Used

Sarai is developed as a full-stack web application, leveraging modern web technologies to create a dynamic and responsive user experience, with a robust backend for AI-driven logic.

* **Frontend:**
    * **JavaScript/TypeScript:** The core programming language for the client-side application.
    * **Vite:** A fast build tool for modern web projects.
    * **React / Vue / Svelte (Likely):** A component-based JavaScript framework (common with Vite setups). 
    * **Tailwind CSS & PostCSS:** For highly customizable, utility-first CSS styling and efficient stylesheet processing.
* **Backend:**
    * **Node.js (TypeScript):** The runtime environment for the server-side application.
    * **Drizzle ORM:** A type-safe ORM for interacting with databases, ensuring data integrity and developer efficiency.
    * **AI Integration:** Core AI features are powered by SOTA models from providers like OpenAI. In  production, it is presumed that the AI will be activated via Serverless API calls. For local implementation, open-source models can work fine. *(It's worthy of note that the core AI logic is in TS - this was a matter of convenience since a lot of other aspects of the project were already written in TypeScript/Javascript)*
* **Tooling:**
    * **npm / Yarn:** Package managers for managing project dependencies.

## 🚀 How to Run

To set up and run the Sarai application locally, follow these steps:

**1. Clone the Repository:**

First, ensure you have Git installed on your machine. Open your terminal or command prompt and execute:

```bash
git clone [https://github.com/samsonDzealot/AI-Running-Coach-App.git](https://github.com/samsonDzealot/AI-Running-Coach-App.git)
cd AI-Running-Coach-App

2. Install Backend Dependencies:

Navigate into the server directory and install the required Node.js packages:

Bash

cd server
npm install # or yarn install
3. Install Frontend Dependencies:

Return to the root directory, then navigate into the client directory and install its dependencies:

Bash

cd .. # Go back to the root directory
cd client
npm install # or yarn install
4. Configure Environment Variables:

Create a .env file in the root directory of your project. This file will store sensitive information like API keys or database connection strings.

Code snippet

# Example:
# DATABASE_URL="your_database_connection_string"
# AI_SERVICE_API_KEY="your_ai_model_api_key_if_applicable"
# Add other environment variables as required by your specific backend services.
(Note: You'll need to look into your server code to identify exactly what environment variables it expects, e.g., for database connection or any external AI services it might call.)
5. Database Setup (Drizzle Migrations):

If your project uses Drizzle for database management, you may need to run migrations to set up your database schema. Check your package.json inside the server directory for scripts related to drizzle or db:migrate.

Bash

cd ../server # Ensure you are in the server directory
# Example command (check your server/package.json for exact script):
# npm run db:migrate
6. Start the Backend Server:

While still in the server directory, start the backend server:

Bash

npm run dev # Or `npm start`, `yarn dev`, etc. Check server/package.json scripts.
The server will typically run on a port like 3001 or 5000.

7. Start the Frontend Application:

Open a new terminal window/tab. Navigate to the client directory and start the frontend development server:

Bash

cd AI-Running-Coach-App/client # Adjust path if needed
npm run dev # Or `npm start`, `yarn dev`, etc. Check client/package.json scripts.
The frontend application will typically open in your browser at http://localhost:5173 (Vite's default) or similar.

💡 Future Enhancements
The vision for Sarai extends far beyond the current prototype. Key areas for future development include:

Full AI Coaching Implementation: Transition from basic chatbot to the fully envisioned professional running coach AI Agent, capable of generating adaptive training plans, providing nuanced feedback, and dynamically adjusting schedules for injury prevention in autonomous fashion.
Seamless Data Integration: Integrate with popular wearable devices and running apps (e.g., Strava, Garmin Connect, Apple Health) for automatic run tracking and data import.
Real-time Interaction: Develop real-time voice coaching features for in-ear guidance during runs and interactive workout animations.
Comprehensive Analytics Dashboard: Implement advanced data visualization and analytics tools to provide users with deep insights into their progress, performance trends, and areas for improvement.
Community and Social Features: Incorporate elements like shared progress, challenges, and leaderboards to foster a supportive community.
Mobile Native Applications: Develop dedicated iOS and Android applications for a more integrated and performant mobile experience.
Enhanced Error Handling and Logging: Implement robust error handling and logging systems for improved reliability and easier debugging in a production environment.
🤝 Contributing
This project is a personal endeavor, but insights and collaboration are always welcome. Feel free to explore the codebase, adapt concepts, or reach out with ideas for future enhancements.
