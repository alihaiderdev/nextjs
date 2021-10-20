import { useRouter } from 'next/router';
import Link from 'next/link';
import { forwardRef, useEffect } from 'react';

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

  const Button = forwardRef(function fr({ onClick, href }, ref) {
    console.log('ref : ', href);
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Yes Click
      </a>
    );
  });
  return (
    <div className='home'>
      <h1>This is home page</h1>{' '}
      <a
        href={`${process.env.mySiteUrl}`}
        target='_blank'
        rel='noreferrer'
      >{`${process.env.mySiteUrl}`}</a>
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
        <Link
          href={{
            pathname: '/about',
            query: { name: 'ali', age: 23, gender: 'male', employeeAtAnyCompany: true },
          }}
        >
          <a>
            <button>About query</button>
          </a>
        </Link>
      </div>
      {/* we use passHref to passing link href value to its direct child if its direct child is a tag then we dont use it by deauld its paas to it  */}
      <div>
        <Link
          passHref
          href={{
            pathname: '/about',
            query: { name: 'ali', age: 23, gender: 'male', employeeAtAnyCompany: true },
          }}
        >
          <button>About query using passRef</button>
        </Link>
      </div>
      {/* use of passHref  */}
      <Link
        passHref
        href={{
          pathname: '/about',
          query: { name: 'ali', age: 23, gender: 'male', employeeAtAnyCompany: true },
        }}
      >
        <Button />
      </Link>
      <div>
        {/* <button onClick={() => router.push('/news')}>News</button> */}
        <button onClick={redirect}>News</button>
        <button onClick={() => router.push('/home?page=1', undefined, { shallow: true })}>
          Home 1
        </button>
        <button onClick={() => router.push('/home?page=2', undefined, { shallow: true })}>
          Home 2
        </button>
        <button onClick={() => router.push('/home?page=3', '/about', { shallow: true })}>
          Home 3
        </button>
      </div>
    </div>
  );
};

export default Home;
