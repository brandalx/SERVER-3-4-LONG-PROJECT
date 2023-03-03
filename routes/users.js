import express from 'express'
import usersController from '../controllers/userController.js'
import auth from '../middlewares/auth.js'
const router = express.Router()
// For each route there is a call to the controller that implements the required logic
router.get('/', usersController.getUsers)
router.get('/userInfo', auth, usersController.getUserInfo)
router.post('/', usersController.postUser)
router.post('/login', usersController.postLogin)
router.put('/:id', auth, usersController.putUser)
router.delete('/:id', auth, usersController.deleteUser)

export default router
