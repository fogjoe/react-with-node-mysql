import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <App />
    </div>
  </React.StrictMode>
)
