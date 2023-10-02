import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from 'route-views'
import './sass/global.scss'
import { ModalProvider } from './context/contextModal';

const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>

      <RouterProvider
        router={router}
        />
      </ModalProvider>
  </React.StrictMode>,
)
