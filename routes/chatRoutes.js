import { Router } from 'express';

import chatControllers from '../controller/chatController.js'

// import AppointmentController from '../controller/appointmentBooking'

const router = Router();


router.post('/', chatControllers)



export default router;