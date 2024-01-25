import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { hashPassword } from '../utils/password';
import { validateUserData } from '../utils/validation';

const prisma = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const validationError = validateUserData(req.body);
    if (validationError) {
      return res
        .status(400)
        .json({ error: 'Input validation has failed. Please recheck your info.' });
    }
    const hashedPassword = await hashPassword(req.body.accountPassword);
    const user = await prisma.user.create({
      data: {
        ...req.body,
        accountPassword: hashedPassword,
      },
    });
    res.status(201).json({ message: 'User Registration Successful!' });
  } catch (error) {
    res.status(500).json({ error: 'User Registration Failed. Please try again later.' });
  }
};