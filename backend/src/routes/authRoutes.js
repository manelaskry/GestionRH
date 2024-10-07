import express from 'express';
import { register, login } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', authMiddleware, (req, res) => {
  res.send(`Hello ${req.user.role}, this is your dashboard`);
});

export default router;
