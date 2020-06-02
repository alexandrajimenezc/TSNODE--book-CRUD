import {Router} from 'express';
import {indexController} from '../controllers/indexControllers'
const router:Router =Router();

router.get('/', indexController.index)



export default router;