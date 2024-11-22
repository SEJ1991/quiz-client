import { useParams } from 'react-router-dom';

import QuizContainer from '../containers/QuizContainer';

/**
 * 퀴즈 페이지
 */
export default function QuizPage() {
  const { idx } = useParams();

  return <QuizContainer idx={idx} />;
}
