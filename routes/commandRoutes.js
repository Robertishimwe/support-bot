import { Router } from 'express';

import commandControllers from '../controller/commandController.js'


const router = Router();


router.post('/create', commandControllers.createCommand)



export default router;