// const Blog = () => {
//     return (
//       <div>
//         <h1>This is blog page.</h1>
//       </div>
//     );
// };

// export default Blog;
import styles from '../styles/Home.module.css';
import Head from 'next/head';

// Generates a random number within user indicated interval
// const getRandom = async ({ min, max, base }) => {
//   console.log({ min, max, base });
//   const response = await fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=${base}&format=plain&rnd=new`);
//   console.log(' response.text() :', response.text());
//   return response.text();
// };
export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await res.json();

  // if data is not found getting some error redirect to another page
  // if (comments) {
  //   return { redirect: { destination: '/about', permanent: false } };
  // }
  // if data is not found getting some error redirect to another page

  // if data is not found getting some error redirect to 404 page

  // not working both conditions
  // comments && { notFound: true };
  // comments ? { notFound: true } : null;
  if (!comments) return { notFound: true };
  // if data is not found getting some error redirect to 404 page

  return {
    props: { comments },
    revalidate: 10, //set revalidate to 10 here 10 is the time in seconds for the apis that you want to call every some specific momemt for fetching updated data from server or something like random data on every hit
    // revalidate: 10 make build after every 10 seconds
  };
}
const Comments = ({ comments }) => {
  console.log({ comments });
  return (
    <div>
      <Head>
        <title>Comments page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>All Comments: </h1>
      <div className={styles.grid}>
        {comments &&
          comments.length > 0 &&
          comments.map((item, id) => {
            return (
              <span key={item.id} className={styles.card}>
                <h2>Commment # {item.id} &rarr;</h2>
                <h3 style={{ margin: '0 0 20px 0' }}>{item.email}</h3>
                <h3 style={{ margin: '0' }}>{item.name}</h3>
                <p>{item.body}</p>
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
