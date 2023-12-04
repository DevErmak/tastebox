import { Home } from '@/pages/home';
import { DefaultLayout } from '@/widgets/layout';
import { createBrowserRouter } from 'react-router-dom';

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);
