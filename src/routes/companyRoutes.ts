import { Router } from 'express';
import registerCompany from '../controllers/companyController';

const router = Router();

router.post('/companyregister', registerCompany);

export default router;
