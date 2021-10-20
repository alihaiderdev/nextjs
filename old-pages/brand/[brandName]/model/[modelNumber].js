import { useRouter } from 'next/dist/client/router';

const ModelNumber = () => {
  const router = useRouter();
  const { brandName, modelNumber } = router.query;
  console.log('router : ', router.query);
  return (
    <div>
      Brand name is {brandName} and model number is {modelNumber}.{' '}
    </div>
  );
};

export default ModelNumber;
