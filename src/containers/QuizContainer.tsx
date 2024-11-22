import ContentsWrapper from '../components/ContentsWrapper';
import Button from '../components/Button';
import Typography from '../components/Typography';

interface Props {
  idx?: string;
}
/**
 * 퀴즈 로직 컨테이너
 * @property {string} idx url param (default '0')
 */
export default function QuizContainer({ idx = '0' }: Props) {
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
