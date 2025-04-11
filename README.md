
Quizoo – Smart Assessment Board 
Quizoo is an interactive web application built for the Smart Assessment Board Hackathon, aimed at helping school teachers conduct engaging quiz competitions on Indian states and their capitals. It features a modern frontend using React.js and a backend with MongoDB as the database.Each and Everything  is built from scratch and single api is used i.e Gemini api
Features
•	Teacher Dashboard: Seamlessly add students and manage quizzes from one place.
•	Student Registration: Securely add student details for controlled access.
•	Quiz Creation: Add custom questions, set time limits, and select correct options easily.
•	Live Quiz Monitoring: Real-time tracking of which students have attempted the quiz.
•	Instant Results: Automatic evaluation with immediate feedback.
•	Role-Based Access: Ensures only the right users see or manage the right data.
•	Tech Stack: Built with React.js for a fast UI and MongoDB for secure, scalable data handling.
________________________________________
Tech Stack:-
Frontend:React.js
Backend:MongoDB
Prerequisites
•	Node.js (v14+)
•	MongoDB (local or cloud instance)
•	React
•	Express
Installation
1.	Clone the repository
 bash
 CopyEdit
 git clone <repo-url>
cd hackathon_project
2.	Install frontend dependencies
bash
CopyEdit
cd frontend
npm install
3.	Install backend dependencies
bash
CopyEdit
cd ../backend
npm I express
4.	Start MongoDB
Make sure MongoDB is running locally or provide a remote URI in the .env file (see below).
5.	Configure Environment Variables
Create a .env file in the server/ directory with:
ini
CopyEdit
MONGO_URI=<your_mongodb_connection_string>
PORT=3000
6.	Run the app
In separate terminals:
bash
CopyEdit
# Terminal 1 (for backend)
cd backend
npm start

# Terminal 2 (for backend)
cd frontend
npm run dev
________________________________________
Project Structure
hackathon/
│
├── frontend/              # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
│
├── backend/              # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
________________________________________
 Screenshots:-
 QUIZOO
	Smart solution designed for modern classrooms
	Enables interactive and engaging quiz competitions
	Simple and user-friendly interface 
	Built using Javascript,React.js,Mongo Db
 
Instruction page
	Quiz name: Capital hunt
	Easy-to-understand instruction box
	Designed for smooth, distraction-free gameplay
	Each question must be answered within 30 seconds
	Do not switch tabs or open other windows during quiz it will lead to auto submission
	Clear navigation with Start Quiz 
 
Login Page
	Separate login for Students and Teachers
	Role-based dashboard access
	Secure authentication(password salting)
	One-click log-in to start the quiz journey
	User have to enter email id and password
 
Interactive Quiz Interface : 
	Displays one question at a time with 4 multiple-choice options.
	Allows navigation using "PREV" and "NEXT" buttons.
	(Highlights selected answer for visual clarity.)
	Ensures accuracy and fairness in response selection.
 
Quiz Completion
	Final screen confirms quiz submission.
	Displays an elated message: "Quiz Completed ✅".
	Shows total score (e.g., “Score 10/10”) to give instant feedback.
	Logout button ensures a secure user exit.
 
Teacher Dashboard
	Add Students: Input student details, stored in MongoDB
	Live Student List: View added students instantlywith their name,email address
	Create Quiz: Add questions, assign to all students
	Track Attempts: See how many students attempted with scores
	Real-Time Updates: React.js frontend + MongoDB backend
 
Secure Enrollment
	Enter Name, Email, Password and phone number
	Each student gets personal login credentials
	Ensures  secure access to quizzes
	Full control for teacher over who can participate
 
Display Added Students
	Student Info Displayed
	Name,Email and Phone Number
 
Add Quiz
	Enter the question text & Add 4 multiple-choice options
	Select correct option
	Create Quiz Questions Instantly with AI (e.g., Gemini)
	Set the quiz duration (in minutes)
	Submit to save quiz in MongoDB
 
Why Quizoo Stands Apart?
	Controlled Access – Only teachers add students. No outsiders.
	AI-Generated Quizzes – Smart questions with GenAI.
	Secure Login – Password salting. Hack-proof.
	No Tab Switching – Cheating? Auto-submission kicks in.
________________________________________
  Authors
•	Harshal sharma
•	Charanjot Singh
•	Simarjot kaur
•	Simran
________________________________________

