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

/**
 * It takes a payload, signs it with a secret key, and returns a token
 * @param payload - The data you want to store in the token.
 * @returns A token
 */
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

/**
 * It takes a token as an argument, and returns the decoded token if it's valid, or an error if it's
 * not
 * @param token - The token to be verified.
 * @returns The decoded token or an error.
 */
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
}

/**
 * It returns true if the username and password combination exists in the data.Users array
 * @returns A boolean value.
 */
function IsUserExist({ username, password }) {
  return data.Users.findIndex(user => user.username === username && user.password === password) !== -1;
}
/**
 * GetUserInfo returns an object with an id and role property, where the id and role are taken from the
 * user object in the data.Users array that has a matching username and password.
 * @returns An object with the id and role of the user.
 */
function GetUserInfo({ username, password }) {
  const user = data.Users.find(user => user.username === username && user.password === password);
  return { id: user.id, role: user.role };
}


/* A POST request to the /api/login endpoint. It takes the username and password from the
request body, and checks if the user exists in the data.Users array. If the user exists, it returns
a token with the id and role of the user. If the user doesn't exist, it returns an error. */
server.post('/api/login', (req, res) => {
  const { username, password } = req.query;
  if (IsUserExist({ username, password }) === false) {
    const status = 401;
    const message = 'Sai tên đăng nhập hoặc mật khẩu';
    res.status(status).json({ status, message });
    return;
  }
  const { id, role } = GetUserInfo({ username, password });
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
