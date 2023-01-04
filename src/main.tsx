import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Tribe from './routes/Tribe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
  },
  {
    path: 'tribes/:tribeId',
    element: <Tribe />
  }
])

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_DIRECTUS_ENDPOINT,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
