const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');
const dbContext = fs.readFileSync(path.join(__dirname, '\\data\\db.json'));

const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '\\data\\db.json'));

const SECRET_KEY = '092099008333';
const expiresIn = '1h';

let data = JSON.parse(dbContext);

const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(bodyParser.json());

// Create a token from a payload 
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
}


function isAuthenticated({ username, password }) {
  return data.Users.findIndex(user => user.username === username && user.password === password) !== -1;
}
function getUserInfo({ username, password }) {
  const user = data.Users.find(user => user.username === username && user.password === password);
  return { id: user.id, role: user.role };
}

server.post('/api/login', (req, res) => {
  const { username, password } = req.query;
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = 'Sai tên đăng nhập hoặc mật khẩu';
    res.status(status).json({ status, message });
    return;
  }
  const { id, role } = getUserInfo({ username, password });
  const access_token = createToken({ id, role });
  res.status(200).json({ access_token });
});


server.use(/^(?!\/api).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401;
    const message = 'Bad authorization header';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token is not valid';
    res.status(status).json({ status, message });
  }
});

server.use('/api', router);
server.listen(3000, () => {
  console.log('API Server is running');
});
