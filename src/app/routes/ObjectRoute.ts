import { Router } from 'express'
import { UPLOAD } from '@multer'
import { ObjectController } from '../controllers'

const route = Router()

route.get('/', ObjectController.list)

route.post('/', UPLOAD.single('file'), ObjectController.save)

export default route
