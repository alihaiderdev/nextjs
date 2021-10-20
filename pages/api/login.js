export default function handler(req, res) {
  console.log('Req : ', req.method);

  if (req.method === 'GET') {
    res.status(200).json({
      email: 'get@gmail.com',
      userName: 'alihaider',
      password: '12345',
      message: 'Success',
    });
  } else if (req.method === 'POST') {
    res.status(200).json({
      email: 'post@gmail.com',
      userName: 'alihaider',
      password: '12345',
      message: 'Success',
    });
  } else if (req.method === 'PUT') {
    res.status(200).json({
      email: 'put@gmail.com',
      userName: 'alihaider',
      password: '12345',
      message: 'Success',
    });
  } else if (req.method === 'PATCH') {
    res.status(200).json({
      email: 'patch@gmail.com',
      userName: 'alihaider',
      password: '12345',
      message: 'Success',
    });
  } else {
    res.status(200).json({
      email: 'delete@gmail.com',
      userName: 'alihaider',
      password: '12345',
      message: 'Success',
    });
  }
}
