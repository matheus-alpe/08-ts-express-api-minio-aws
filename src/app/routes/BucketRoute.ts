import { Router } from 'express'
import { listS3Buckets } from '@s3'

const route = Router()

route.get('/', async (req, res) => {
  const buckets = await listS3Buckets()

  res.json({
    buckets
  })
})

export default route
