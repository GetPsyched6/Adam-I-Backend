import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import hashPassword from '../utils/password';
import validateCompanyData from '../utils/validateCompany';

const prisma = new PrismaClient();

const registerCompany = async (req: Request, res: Response) => {
  try {
    const validationError = validateCompanyData(req.body);
    if (validationError) {
      return res.status(400).json({
        error: 'Input validation has failed. Please recheck your info.',
        message: validationError,
      });
    }
    const companyData = { ...req.body };
    delete companyData.confirmPassword;
    const hashedPassword = await hashPassword(companyData.accountPassword);
    try {
      const company = await prisma.company.create({
        data: {
          ...companyData,
          accountPassword: hashedPassword,
        },
      });
      return res.status(201).json({
        message: 'Company Registration Successful!',
        company: {
          ...company,
          accountPassword: '[redacted]',
        },
      });
    } catch (error) {
      return res.status(400).send('Fail');
    }
  } catch (error) {
    return res.status(500).json({ error: 'Company Registration Failed. Please try again later.' });
  }
};

export default registerCompany;
