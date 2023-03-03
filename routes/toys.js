import express from 'express'
import toysController from '../controllers/toysController.js'
import auth from '../middlewares/auth.js'
const router = express.Router()
// For each route there is a call to the controller that implements the required logic
router.get('/', toysController.getAllToys)
router.get('/search', toysController.getSearchToys)
router.get('/category/:catname', toysController.getToysByCat)
router.post('/', auth, toysController.postToy)
router.put('/:editId', auth, toysController.putToy)
router.delete('/:delId', auth, toysController.deleteToy)

export default router
