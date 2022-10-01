import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { listS3Buckets } from './s3'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/buckets', async (req, res) => {
  const buckets = await listS3Buckets()

  res.json({
    buckets
  })
})

export default app
