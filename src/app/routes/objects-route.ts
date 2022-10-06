import { Router } from 'express'
import { listS3Objects } from '@s3'

const route = Router()

route.get('/', async (req, res) => {
  const objects = await listS3Objects()

  res.json({
    objects
  })
})

export default route
