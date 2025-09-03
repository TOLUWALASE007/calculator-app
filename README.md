# 🧮 Calculator App

A full-stack calculator application built with React, TypeScript, Tailwind CSS, Node.js, and Express.

## 🚀 Features

- ✨ **Modern UI** with Tailwind CSS styling
- 🔢 **Basic Operations**: Add, Subtract, Multiply, Divide
- ⚡ **Real-time calculations** via API
- 🛡️ **Error handling** for invalid inputs and division by zero
- 📱 **Responsive design** that works on all devices
- 🎯 **TypeScript** for type safety

## 🏗️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
calculator-app/
├── backend/                 # Node.js + Express API
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── node_modules/       # Backend packages
├── frontend/               # React + TypeScript app
│   ├── src/
│   │   ├── App.tsx         # Main calculator component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Tailwind CSS imports
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── node_modules/       # Frontend packages
└── README.md               # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd calculator-app
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd backend
node index.js
```
**Expected output**: `✅ API running at http://localhost:3001`

### Start the Frontend Server
```bash
cd frontend
npm run dev
```
**Expected output**: `Local: http://localhost:5173/` (or similar port)

### Access the Application
Open your browser and navigate to the frontend URL (usually `http://localhost:5173` or `http://localhost:5174`)

## 🎯 How to Use

1. **Enter Numbers**: Type your first and second numbers in the input fields
2. **Select Operation**: Click on add, subtract, multiply, or divide
3. **Calculate**: Click the "Calculate" button
4. **View Result**: See your result displayed below the form

## 🔧 API Endpoints

### Backend API (`http://localhost:3001`)

#### GET `/`
- **Description**: Health check endpoint
- **Response**: `"Calculator API is running ✅"`

#### POST `/calculate`
- **Description**: Perform mathematical calculations
- **Request Body**:
  ```json
  {
    "a": 5,
    "b": 3,
    "op": "add"
  }
  ```
- **Response**:
  ```json
  {
    "result": 8
  }
  ```
- **Error Response**:
  ```json
  {
    "error": "Cannot divide by 0"
  }
  ```

### Supported Operations
- `"add"` - Addition
- `"subtract"` - Subtraction  
- `"multiply"` - Multiplication
- `"divide"` - Division

## 🎨 Styling

The app uses **Tailwind CSS** for styling with:
- Responsive grid layouts
- Modern button designs
- Clean form inputs
- Color-coded feedback (green for success, red for errors)
- Smooth hover effects

## 🐛 Troubleshooting

### Common Issues

#### "Could not reach backend. Is it running?"
- Make sure the backend server is running on `http://localhost:3001`
- Check that both servers are running in separate terminal windows

#### "Port already in use"
- The frontend will automatically try a different port (e.g., 5174 instead of 5173)
- Check the terminal output for the correct URL

#### Styling not working
- Make sure Tailwind CSS is properly installed
- Restart the frontend server if you made changes to Tailwind config

### Development Tips
- Keep both servers running while developing
- The frontend will hot-reload when you make changes
- Check browser console for any JavaScript errors

## 🔮 Future Enhancements

Potential features to add:
- 📊 **Calculation History**
- 🧮 **Advanced Operations** (square root, power, etc.)
- 💾 **Local Storage** for history persistence
- 🎨 **Dark Mode** toggle
- 📱 **Mobile App** version
- 🔐 **User Authentication**
- ☁️ **Cloud Storage** for calculations

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Make sure both servers are running properly

---

**Happy Calculating! 🧮✨**
