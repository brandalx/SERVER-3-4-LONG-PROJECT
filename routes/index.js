import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  res.json({
    msg: 'Homepage. If you are lost, follow to https://toysrestapi.cyclic.app/'
  })
})

export default router
