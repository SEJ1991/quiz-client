import Button from '../components/Button';
import ContentsWrapper from '../components/ContentsWrapper';
import Typography from '../components/Typography';

/**
 * 결과 로직 컨테이너
 */
export default function ResultContainer() {
  return (
    <ContentsWrapper className='gap-10'>
      <Typography className='text-2xl font-bold' element='h1'>
        RESULT
      </Typography>
      <ContentsWrapper className='h-auto gap-1'>
        <Typography className='text-green-500'>Question 1. correct</Typography>
        <Typography className='text-red-500 line-through'>Question 2. incorrect</Typography>
        <Typography className='text-green-500'>Question 3. correct</Typography>
        <Typography className='text-red-500 line-through'>Question 4. incorrect</Typography>
        <Typography className='text-green-500'>Question 5. correct</Typography>
      </ContentsWrapper>
      <Typography className='text-lg'>Thank you for your effort.</Typography>
      <Button>Home</Button>
    </ContentsWrapper>
  );
}
