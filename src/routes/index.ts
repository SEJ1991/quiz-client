import { RouteObject } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from '../pages/Home';
import QuizPage from '../pages/Quiz';
import ResultPage from '../pages/Result';

export const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        index: true,
        path: '/',
        Component: HomePage,
      },
      {
        path: '/:id',
        Component: QuizPage,
      },
      {
        path: '/result',
        Component: ResultPage,
      },
    ],
  },
];
