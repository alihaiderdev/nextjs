import { useRouter } from 'next/router';
import Link from 'next/link';

// here it is not necessary that file and folder name must be same it would be different
const Home = () => {
  const router = useRouter();
  const { infoType } = router.query;
  console.log('router : ', router.query);
  return (
    <div className='home'>
      <h1>This is home page</h1>
      {/* <Link href='/'>
        <a>Index Page</a>
      </Link> */}
      {/* OR  */}
      <div>
        <Link href='/'>Index</Link>
      </div>
      <div>
        <Link href='/blog'>Blog</Link>
      </div>
      <div>
        <Link href='/article'>Article</Link>
      </div>
      <div>
        <Link href='/brand'>Brand</Link>
      </div>
      <div>
        <Link href='/info'>Info</Link>
      </div>
      <div>
        <Link href='/info/bus'>Info vehicle</Link>
      </div>
      <div>
        <Link href='/info/bus/honda'>Info vehicle name</Link>
      </div>
      <div>
        <Link href='/info/bus/honda/2010'>Info vehicle model</Link>
      </div>
    </div>
  );
};

export default Home;
