import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';

// here it is not necessary that file and folder name must be same it would be different
const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const handlerRouteChange = (url) => {
      console.log('ready to change : ', url);
    };
    router.events.on('routeChangeStart', handlerRouteChange); // route chnage hona sa pehla hi bta dega ka kis user kis route pa jane laga hai
  }, []);
  const { infoType } = router.query;
  console.log('router : ', router.query);
  const redirect = () => {
    router.push('/news');
  };
  return (
    <div className='home'>
      <h1>This is home page</h1>
      <button onClick={() => router.back()}>Back</button>
      {/* replace function bhi back ki tarha hi work karta hai but back hamain us route pa la kar chae jata hai jahan sa hum ate hain but replace hum jis route par sa ata hain us sa aak step piche wale route pa la jata hai or ya hamara multi steps form wale scenarios ma kaam asakta hai  */}
      <button onClick={() => router.replace('/blog/6')}>Replace Blog 6</button>
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
