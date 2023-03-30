import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import router from '/@/router/index'

import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
