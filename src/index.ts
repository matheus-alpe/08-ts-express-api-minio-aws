import initializeExpress from './server'
import { checkS3Bucket } from '@s3'

const { S3_BUCKET } = process.env

async function initializeServer() {
  try {
    await checkS3Bucket({ Bucket: String(S3_BUCKET) })
    initializeExpress()
  } catch (error) {
    // TODO: create a error handler to 404 bucket
    console.log(error)
  }
}

initializeServer()
