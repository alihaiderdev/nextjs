import { useRouter } from 'next/router';
import Link from 'next/link';

// here it is not necessary that file and folder name must be same it would be different
const Home = () => {
  const router = useRouter();
  const { infoType } = router.query;
  console.log('router : ', router.query);
  const redirect = () => {
    router.push('/news');
  };
  return (
    <div className='home'>
      <h1>This is home page</h1>
      <div>
        <button>
          <Link href='/'>Index</Link>
        </button>
      </div>
      <div>
        <button>
          <Link href='/blog'>Blog</Link>
        </button>
      </div>
      <div>
        <button>
          <Link href='/about' replace>
            About
          </Link>
        </button>
      </div>
      <div>
        {/* <button onClick={() => router.push('/news')}>News</button> */}
        <button onClick={redirect}>News</button>
        <button onClick={() => router.push('/home?page=1', undefined, { shallow: true })}>Home 1</button>
        <button onClick={() => router.push('/home?page=2', undefined, { shallow: true })}>Home 2</button>
        <button onClick={() => router.push('/home?page=3', '/about', { shallow: true })}>Home 3</button>
      </div>
    </div>
  );
};

export default Home;
