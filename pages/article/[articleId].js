import { useRouter } from 'next/dist/client/router';
import React from 'react';

const ArticleId = () => {
  const router = useRouter();
  const { articleId } = router.query;
  console.log('router : ', router.query);
  return <div>This is article number {articleId} page.</div>;
};

export default ArticleId;
