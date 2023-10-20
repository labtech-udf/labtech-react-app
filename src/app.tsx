import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { routes } from './routes';

export default function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={routes} />
    </PrimeReactProvider>
  )
}
