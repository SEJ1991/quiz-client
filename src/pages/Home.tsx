import Button from '../components/Button';
import ContentsWrapper from '../components/ContentsWrapper';
import Typography from '../components/Typography';

/**
 * 홈페이지
 */
export default function HomePage() {
  return (
    <ContentsWrapper className='gap-4'>
      <Typography>
        <Typography element='strong'>Hello, </Typography>
        Are you ready?
      </Typography>
      <Button>Go</Button>
    </ContentsWrapper>
  );
}
