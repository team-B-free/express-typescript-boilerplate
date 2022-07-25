import { Router } from 'express';
import testController from '@controllers/test.controller';

const router: Router = Router();

router.get('/', testController.getTest);

export default router;
