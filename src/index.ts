import initializeExpress from './server'
import { checkS3Bucket } from '@services/s3'

const { S3_BUCKET } = process.env

async function initializeServer() {
  try {
    await checkS3Bucket(String(S3_BUCKET))
    initializeExpress()
  } catch (error) {
    console.log(error)
  }
}

initializeServer()
