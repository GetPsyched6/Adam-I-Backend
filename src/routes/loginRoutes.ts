import { Router } from 'express';
import loginAccount from '../controllers/loginController';

const router = Router();

router.post('/login', loginAccount);

export default router;
