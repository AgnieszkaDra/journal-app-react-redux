import { createBrowserRouter } from 'react-router-dom';
import { Home, Main } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
			{ index: true, element: <Main /> },
    ]
  },
]);

export default router;