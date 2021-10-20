import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();
  console.log('router : ', router);

  const { name, age, gender, employeeAtAnyCompany } = router.query;
  return (
    <div>
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
