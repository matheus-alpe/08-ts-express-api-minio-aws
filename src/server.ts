import app from './app'

const { APP_NAME, S3_BUCKET } = process.env

export default () => {
  app.listen(3000, () => {
    console.log(`
      App: ${APP_NAME}
      Bucket: ${S3_BUCKET}
      Running on: http://localhost:3000
    `)
  })
}
