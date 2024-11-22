import ContentsWrapper from '../components/ContentsWrapper';
import Button from '../components/Button';
import Typography from '../components/Typography';

/**
 * 퀴즈 페이지
 */
export default function QuizPage() {
  const answers = ['Viltrumite', 'Kryptonian', 'Kree', 'Irken'];
  return (
    <ContentsWrapper className='max-w-screen-sm m-auto gap-6'>
      <ContentsWrapper className='h-auto gap-4'>
        <div className=''>What&#039;s the race of Invincible&#039;s father?</div>
        <div className='flex gap-2'>
          {answers.map(answer => (
            <Button key={answer}>{answer}</Button>
          ))}
        </div>
      </ContentsWrapper>
      <Typography>1/5</Typography>
    </ContentsWrapper>
  );
}
