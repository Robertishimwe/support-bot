import { Router } from 'express';

import commandControllers from '../controller/commandController'


const router = Router();


router.post('/create', commandControllers.createCommand)



export default router;