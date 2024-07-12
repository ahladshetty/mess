import express from 'express'
import { showMenu, updateMenu, voteMenu, foodNames } from '../controllers/menuController.js'
import userAuth from '../middleware/auth.js';

const router = express.Router();

router.get('/menu',showMenu)
router.put('/updatemenu', updateMenu)
router.post('/votemenu', userAuth, voteMenu)
router.get('/foodnames',foodNames)

export default router