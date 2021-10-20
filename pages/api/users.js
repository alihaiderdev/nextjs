const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sequelize_with_mysql',
});

connection.connect((error) => {
  if (error) console.log('Error : ', error);
  else console.log('DB Connected Successfuly');
});
export default async function handler(req, res) {
  console.log('Req : ', req.method);
  let users = await getAllUsers();
  if (req.method === 'GET') {
    res.status(200).json({
      count: users.length,
      users,
      message: 'Success',
    });
  }
}

async function getAllUsers() {
  return new Promise((resolve, reject) => {
    let sql = 'select * from users';
    // here field is quer field
    connection.query(sql, (error, result, field) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}
