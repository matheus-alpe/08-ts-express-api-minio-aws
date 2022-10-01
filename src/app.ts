import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello'
  })
})

export default app
