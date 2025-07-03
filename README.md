# 📧 MailToAnyone

A modern web application that allows users to send emails to anyone through a beautiful, responsive interface. Built with React frontend and Node.js backend.

## ✨ Features

- **Modern UI**: Clean, responsive design with floating labels and smooth animations
- **Email Sending**: Send emails to any recipient using Nodemailer
- **Database Storage**: All sent messages are stored in MongoDB
- **Success Feedback**: Beautiful success page with moveing elements
- **Form Validation**: Client-side validation for all fields
- **CORS Enabled**: Secure cross-origin requests

## 🏗️ Project Structure

```
mailToAnyone/
├── server/                 # Backend Node.js application
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── controllers/
│   │   └── mailController.js  # Email sending logic
│   ├── models/
│   │   └── messageModel.js    # MongoDB schema
│   ├── routers/
│   │   └── mailRout.js        # API routes
│   └── index.js              # Server entry point
└── ui/                    # Frontend React application
    ├── src/
    │   ├── App.jsx        # Main application component
    │   ├── Success.jsx    # Success page component
    │   └── main.jsx       # React entry point
    └── index.html         # HTML template
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Gmail account for sending emails

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   Create a `.env` file in the server directory:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   MONGODB_URI=your-mongodb-connection-string
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```
   The server will run on `http://localhost:3000`

### Frontend Setup

1. **Navigate to ui directory:**
   ```bash
   cd ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📋 API Endpoints

### POST `/mails/send-email`
Send an email to a recipient.

**Request Body:**
```json
{
  "name": "Sender Name",
  "emailFrom": "sender@example.com", // To know who sent the mail
  "emailTo": "recipient@example.com",
  "message": "Your message content"
}
```

**Response:**
```json
{
  "message": "Email sent successfully",
  "data": {
    "name": "Sender Name",
    "emailFrom": "sender@example.com",
    "emailTo": "recipient@example.com",
    "message": "Your message content",
    "sentAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET `/mails`
Get all sent messages (for admin purposes).

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **ESLint** - Code linting

## 🎨 UI Features

- **Floating Labels**: Labels animate when fields are focused
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Purple Theme**: Consistent purple color scheme
- **Success Animation**: Bouncing emoji on successful submission
- **Form Reset**: Clean form state after submission

## 🔧 Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your `.env` file

### MongoDB Setup
- Use MongoDB Atlas for cloud hosting
- Or install MongoDB locally
- Update the connection string in your `.env` file

## 📝 Usage

1. Open the application in your browser
2. Fill in your name and email address
3. Enter the recipient's email address
4. Write your message
5. Click "Submit"
6. View the success page
7. Click "Go Back" to send another message

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **404 Error**: Ensure both frontend and backend are running
2. **Email Not Sending**: Check your Gmail credentials and App Password
3. **Database Connection**: Verify your MongoDB connection string
4. **CORS Issues**: Ensure the backend CORS configuration matches your frontend URL

### Debug Mode
- Check browser console for frontend errors
- Check server terminal for backend errors
- Verify all environment variables are set correctly

---

**Happy Email Sending! 📧✨** 