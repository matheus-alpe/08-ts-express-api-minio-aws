import { Router } from 'express'
import bucketsRoute from './buckets-route'
import objectsRoute from './objects-route'

const route = Router()

route.use('/buckets', bucketsRoute)
route.use('/objects', objectsRoute)

export default route
