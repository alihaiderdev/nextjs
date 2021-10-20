import { useRouter } from 'next/router';

const InfoType = () => {
  const router = useRouter();
  const { infoType } = router.query;
  console.log('router : ', router.query);

  if (infoType && infoType.length === 1) {
    return <div>Vehicle is {infoType[0]}</div>;
  }
  if (infoType && infoType.length === 2) {
    return (
      <div>
        {infoType[0].charAt(0).toUpperCase() + infoType[0].slice(1)} name is {infoType[1]}
      </div>
    );
  }
  if (infoType && infoType.length === 3) {
    return (
      <div>
        {infoType[0].charAt(0).toUpperCase() + infoType[0].slice(1)} name is {infoType[1]} and model number is {infoType[2]}
      </div>
    );
  }
  return <div>This is info type page.</div>;
};

export default InfoType;
