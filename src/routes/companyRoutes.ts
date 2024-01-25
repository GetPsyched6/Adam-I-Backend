import { Router } from 'express';
import { companyController } from '../controllers/companyController';

const router = Router();

router.post('/companyregister', companyController);

export default router;
