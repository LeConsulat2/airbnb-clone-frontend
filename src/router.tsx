// src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root'; // Ensure correct path

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
    {
        path:"",
        element: <Home />
    },  
    {
        path:"users",
        element: <Users />
    }]
  },
]);

export default router;
