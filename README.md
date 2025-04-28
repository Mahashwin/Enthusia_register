🎉 Enthusia Registration System
A web application built with Node.js, Express.js, and MongoDB for managing student registrations for the Enthusia College Event.

🚀 Features
Student registration with validation.

Stores registration details in MongoDB.

Admin can view all registrations (optional feature).

API endpoints to create, retrieve, and manage participants.

Responsive and simple UI (if frontend is present).

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB Atlas (Mongoose )

Tools: Postman (for API Testing), Git & GitHub (for version control)

📂 Project Structure
pgsql
Copy
Edit
delete
enthusia-registration/
├── models/
│   └── Registration.js  (MongoDB schema)
├── routes/
│   └── registration.js  (All registration routes)
├── controllers/
│   └── registrationController.js (Logic handling)
├── config/
│   └── db.js             (MongoDB connection)
├── app.js                (Main server file)
├── package.json
└── README.md
⚙️ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/Mahashwin/enthusia_register.git
cd enthusia-register
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables Create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the application

bash
Copy
Edit
npm start
Server will run at:

arduino
Copy
Edit
http://localhost:5000
🧩 API Endpoints

Method	Route	Description
POST	/api/register	Register a new student
GET	/api/registrations	Get all registrations
🛡️ Validation Rules
Name should not be empty.

Email must be valid and unique.

Phone number must be valid.

(Extra validation can be added easily.)

💬 Sample API Request (POST /api/register)
Body:

json
Copy
Edit
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "college": "XYZ College",
    "event": "Dance Battle"
}
📸 Screenshots
(Add screenshots of the form page and success message if you have a frontend.)

🤝 Contributing
Feel free to open issues or pull requests for suggestions and improvements!

📜 License
This project is licensed under the MIT License.

🌟 Thank you for using Enthusia Registration System!
