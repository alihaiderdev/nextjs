// const Blog = () => {
//     return (
//       <div>
//         <h1>This is blog page.</h1>
//       </div>
//     );
// };

// export default Blog;
import styles from '../../styles/Home.module.css';

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs = await res.json();
  return {
    props: { blogs, name: 'ali haider', age: 23, gender: 'male' },
  };
}
const Blog = ({ blogs, name, age, gender }) => {
  return (
    <div>
      <h1>Latest Blogs: </h1>
      <div className={styles.grid}>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((item, id) => {
            return (
              <span key={item.id} className={styles.card}>
                <h2>Blog # {item.id} &rarr;</h2>
                <h3 style={{ margin: '0px' }}>{item.title}</h3>
                <p>{item.body}</p>
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
