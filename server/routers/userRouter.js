//import { pool } from '../helpers/db.js'
import { Router } from 'express'
import { postRegistration, postLogin } from '../controllers/UserController.js'
//import { hash, compare } from 'bcrypt'
//import jwt from 'jsonwebtoken'
//const { sign } = jwt

const router = Router()

router.post('/register', postRegistration)
router.post('/login', postLogin)

const userRouter = router
export default userRouter