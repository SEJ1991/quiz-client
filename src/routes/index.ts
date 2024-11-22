import { RouteObject } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from '../pages/Home';
import QuizPage from '../pages/Quiz';
import ResultPage from '../pages/Result';

export function routes(): RouteObject[] {
  return [
    {
      Component: Layout,
      children: [
        {
          index: true,
          path: '/',
          Component: HomePage,
        },
        {
          path: '/:idx',
          Component: QuizPage,
        },
        {
          path: '/result',
          Component: ResultPage,
        },
      ],
    },
  ];
}
