import app from './app'

const { APP_NAME } = process.env

export default () => {
  app.listen(3000, () => {
    console.log(`${APP_NAME} running on: http://localhost:3000`)
  })
}
