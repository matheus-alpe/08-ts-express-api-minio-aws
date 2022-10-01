import app from './app'

const { APP_NAME } = process.env

app.listen(3000, () => {
  console.log(`${APP_NAME} running on: http://localhost:3000`)
})
