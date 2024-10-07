import bcrypt from 'bcryptjs';
import { User } from '../entities/User.js';
import { generateToken } from '../utils/jwtHelper.js';
import { AppDataSource } from './data-source'; 

export const register = async (req, res) => {
  const { fullName, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const userRepo = AppDataSource.getRepository(User);
    const newUser = userRepo.create({ fullName, email, password: hashedPassword, role });
    await userRepo.save(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    // Set the JWT token in an HTTP-only cookie
    res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 }); // 1 hour
    res.status(200).json({ message: 'Login successful', role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
