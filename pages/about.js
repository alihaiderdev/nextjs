import { useRouter } from 'next/router';
import Head from 'next/head';

const About = () => {
  const router = useRouter();
  console.log('router : ', router);

  const { name, age, gender, employeeAtAnyCompany } = router.query;
  return (
    <div>
      <Head>
        <title>About page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>This is about page.</h1>
      {name && age && gender && employeeAtAnyCompany ? (
        <ul>
          <li>name : {name}</li>
          <li>age : {age}</li>
          <li>gender : {gender}</li>
          <li>employeeAtAnyCompany : {employeeAtAnyCompany}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default About;
