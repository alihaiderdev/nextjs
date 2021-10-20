export default function handler(req, res) {
  console.log('Req : ', req.method);
  const { postId } = req.query;
  if (req.method === 'POST') {
    res.status(200).json({
      postId,
      email: 'postApi@gmail.com',
      userName: 'alihaider',
      password: '12345',
      message: 'Success',
    });
  }
}
