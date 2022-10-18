import { Router } from 'express'
import bucketRoute from './BucketRoute'
import objectRoute from './ObjectRoute'

const route = Router()

route.use('/buckets', bucketRoute)
route.use('/objects', objectRoute)

export default route
