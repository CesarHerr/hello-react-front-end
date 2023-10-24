import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/Greeting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
