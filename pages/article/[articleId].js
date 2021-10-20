import { useRouter } from 'next/dist/client/router';

const ArticleId = () => {
  const router = useRouter();
  const { articleId } = router.query;
  console.log('router : ', router.query);
  return <div>This is article number {articleId} page.</div>;
};

export default ArticleId;
