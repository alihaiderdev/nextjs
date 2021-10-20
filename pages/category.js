// normal import
// import Sidebar from '../components/Sidebar';

// advantage off dynamic import is this that all components is not bundalize in one main file in our case category file because if everything are under in single bundle than may be lots of components in it cause the bundle size to too big this will cause to increase the initial loading time same like react lazy load
// dynamic import
import dynamic from 'next/dynamic';
import router, { useRouter } from 'next/router';
import Head from 'next/head';
// const Sidebar = dynamic(() => import('../components/Sidebar')); // use in this way if component is exported default
// const Sidebar = dynamic(() => import('../components/Sidebar').then((module) => module.Sidebar)); // use in this way if component is name exported
// and if we use the above 2 imports and press ctrl + u and see in view page source then we will see that these content is present in there it means its also render on serer side and if we want to stop this and dont want this behaviour then we will use the below import
// const Sidebar = dynamic(() => import('../components/Sidebar').then((module) => module.Sidebar), { ssr: false });
const Sidebar = dynamic(() => import('../components/Sidebar').then((module) => module.Sidebar), {
  ssr: false,

  loading: () => <h2>Loading ............</h2>,
});
const Category = () => {
  const router = useRouter();
  return (
    // <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div>
      <Head>
        <title>Category page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Sidebar />
      This is category page.
      <button type='button' onClick={() => router.push('/home')}>
        Home
      </button>
      {/* static way  */}
      <button type='button' onClick={() => router.push('/blog/2')}>
        Static Blog 2
      </button>
      {/* dynamic way  */}
      <button
        type='button'
        onClick={() => router.push({ pathname: '/blog/[blogId]', query: { blogId: 2 } })}
      >
        Dynamic Blog 2
      </button>
    </div>
  );
};

export default Category;
