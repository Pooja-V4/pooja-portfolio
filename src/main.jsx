import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 
// 2. Font Awesome CSS (Icons)
import '@fortawesome/fontawesome-free/css/all.min.css';
// 3. Your Custom CSS (for navigation styles, colors, etc.)
import './App.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)