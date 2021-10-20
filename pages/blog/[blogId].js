import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
  // defining paths for all the pages that we want to make bundle
  const paths = ['/blog/1', '/blog/2', '/blog/3', '/blog/4', '/blog/5', '/blog/6', '/blog/7', '/blog/8', '/blog/9', '/blog/10'];

  // fallback: true || false || 'blocking';
  // fallback: true  sa ya hoga ka paths ka ander jo jo paths define hain unhain to bundle kar ka pehla hi rakh lega or call karna pa dekha dega and jesa ka hamare case ma 10 blogs starting ka baki agar user 10 ka baad kisi bhi blog pa jaega to usa pehla loader dikhaega and paths wale blogs ka ilawa agar kisi bhi blog pa jaega to first time to client side pa ja kar render karwaega and first time pa hi iski build bhi bana dega and jab user again is page pa aega to usa jo build bani hogi wahan sa dekhaega matlab is baar wale sa aega but agar hum fallback ko false kar dainga to paths wale to dekha dega pages but uska ilawa wale pages pa 404 de dega
  //   is oper wali problem ko hi solve karna ka lia hum server side rendering karainga using getServerSideProps

  // and jab hum fallback: "blocking" use karainga to next tab tak page nhi dkhaega jab tak ka page including data completely server side sa create ho kar nhi ajata
  // return { paths, fallback: true };
  // return { paths, fallback: false };
  return { paths, fallback: 'blocking' };
}
// export async function getStaticProps(context) {
//  const { query, params } = context;
export async function getStaticProps({ params: { blogId } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
  const blog = await res.json();
  return {
    props: { blog, name: 'ali haider', age: 23, gender: 'male' },
  };
}

// hum aak time pa dono functions ko use knhi kar sakte getServerSideProps and getStaticProps with getStaticPaths

// export async function getServerSideProps({ params: { blogId } }) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
//   const blog = await res.json();
//   return {
//     props: { blog },
//   };
// }

const Blog = ({ blog }) => {
  console.log('blog : ', blog);
  const router = useRouter();

  //   is just for that pages that does not create on server first show the spinner and then render on client side
  if (router.isFallback) {
    return <div>Loading page data ...</div>;
  }
  return (
    <>
      <button onClick={() => router.back()}>Back</button>
      <div className={styles.grid}>
        <span className={styles.card}>
          <h2>Blog {blog.id} &rarr;</h2>
          <h3 style={{ margin: '0px' }}>{blog.title}</h3>
          <p>{blog.body}</p>
        </span>
      </div>
    </>
  );
};

export default Blog;
