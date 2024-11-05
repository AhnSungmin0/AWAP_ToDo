//import { pool } from '../helpers/db.js'
//import { emptyOrRows } from '../helpers/utils.js'
import { Router } from 'express'
import { auth } from '../helpers/auth.js'
import { getTasks, postTask, DeleteTask } from '../controllers/TaskController.js'

const router = Router()

router.get('/', getTasks)
router.post('/create', auth, postTask)
router.delete('/delete/:id', auth, DeleteTask)

const todoRouter = router
export default todoRouter