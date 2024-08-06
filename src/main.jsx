import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import necessary modules
import './index.css';
import App from './App.jsx';
import ImagePage from './ImagePage.jsx';
import reportWebVitals from './reportWebVitals.jsx';

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/', // Use lowercase 'path'
    element: <App />, // Self-closing tag for elements
  },
  {
    path: '/image', // Correct the path to match the route
    element: <ImagePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with RouterProvider
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
