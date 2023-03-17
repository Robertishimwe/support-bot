import { Router } from 'express';
import chatRoutes from './chatRoutes.js';
import commandRoutes from './commandRoutes';


const router = Router();


router.use('/chat', chatRoutes)
router.use('/command', commandRoutes)


export default router;