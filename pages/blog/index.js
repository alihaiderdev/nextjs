// const Blog = () => {
//     return (
//       <div>
//         <h1>This is blog page.</h1>
//       </div>
//     );
// };

// export default Blog;
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs = await res.json();
  return {
    props: { blogs, name: 'ali haider', age: 23, gender: 'male' },
  };
}
const Blog = ({ blogs, name, age, gender }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Blogs page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>Latest Blogs: </h1>
      <div className={styles.grid}>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((item, id) => {
            return (
              <>
                {/* <a
                  // href=''
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push({ pathname: '/blog/[blogId]', query: { blogId: item.id } })}
                  key={item.id}
                  className={styles.card}
                >
                  <h2>Blog # {item.id} &rarr;</h2>
                  <h3 style={{ margin: '0px' }}>{item.title}</h3>
                  <p>{item.body}</p>
                </a> */}
                {/* OR  */}
                {/* <Link
                  href={{ pathname: '/blog/[blogId]', query: { blogId: item.id } }}
                  key={item.id}
                  className={styles.card}
                >
                  <a className={styles.card}>
                    <h2>Blog # {item.id} &rarr;</h2>
                    <h3 style={{ margin: '0px' }}>{item.title}</h3>
                    <p>{item.body}</p>
                  </a>
                </Link> */}
                {/* OR  */}
                <Link
                  href={`/blog/${encodeURIComponent(item.id)}`}
                  key={item.id}
                  className={styles.card}
                >
                  <a className={styles.card}>
                    <h2>Blog # {item.id} &rarr;</h2>
                    <h3 style={{ margin: '0px' }}>{item.title}</h3>
                    <p>{item.body}</p>
                  </a>
                </Link>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
