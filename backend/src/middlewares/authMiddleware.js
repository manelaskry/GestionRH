import { verifyToken } from '../utils/jwtHelper.js';

export const authMiddleware = (req, res, next) => {
  const token = req.cookies['token'];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is invalid' });
  }
};
