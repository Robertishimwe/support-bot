import { Router } from 'express';

import commandControllers from '../controller/commandController.js'


const router = Router();


router.post('/create', commandControllers.createCommand)
router.get('/get-all', commandControllers.findAllCommand)



export default router;