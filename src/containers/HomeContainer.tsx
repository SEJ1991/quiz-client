import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Button from '../components/Button';
import ContentsWrapper from '../components/ContentsWrapper';
import Typography from '../components/Typography';
import { getQuizess } from '../apis/quiz';

/**
 * 홈페이지 로직 컨테이너
 */
export default function HomeContainer() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['quiz'],
    queryFn: getQuizess,
    staleTime: 0,
    gcTime: 0,
  });

  const handleClick = () => {
    if (!data) {
      alert('퀴즈 데이터가 없습니다');
      return;
    }

    sessionStorage.setItem('quizess', JSON.stringify(data.results));
    navigate('/0');
  };

  const isDisabled = isLoading || isError;
  return (
    <ContentsWrapper className='gap-4'>
      <Typography className='text-lg'>
        <Typography className='text-xl' element='strong'>
          Hello,{' '}
        </Typography>
        Are you ready?
      </Typography>
      <Button onClick={handleClick} disabled={isDisabled}>
        Go
      </Button>
    </ContentsWrapper>
  );
}
