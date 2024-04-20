<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Home } from './pages/Home'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
      <RouterProvider router={router} />
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
    </QueryClientProvider>
  </React.StrictMode>
)
