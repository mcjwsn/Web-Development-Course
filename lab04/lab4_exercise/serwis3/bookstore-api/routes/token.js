const jwt = require('jsonwebtoken');
const jwtSecret = 'supersecretkey';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Brak tokenu' });
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Nieprawidlowy token' });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;