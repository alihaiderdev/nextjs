export default function handler(req, res) {
  console.log('Req : ', req.method);
  const { infoType } = req.query;
  if (req.method === 'GET') {
    res.status(200).json({
      infoType,
      email: 'infoTypeApi@gmail.com',
      userName: 'alihaider',
      password: '12345',
      message: 'Success',
    });
  }
}
