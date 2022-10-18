import { AWSError } from 'aws-sdk'
import s3, { BUCKET_PARAMS } from './config'

export function listS3Buckets() {
  return new Promise((resolve, reject) => {
    s3.listBuckets((err, data) => {
      if (err) reject(err)
      resolve(data.Buckets)
    })
  })
}

function checkS3Bucket() {
  console.log('Checking S3 Bucket')

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      console.log('Taking too long? Consider check `S3_BASE_URL` is right')
    }, 5000)

    s3.headBucket(BUCKET_PARAMS, (err, data) => {
      if (err) reject(err)
      clearTimeout(timeout)
      resolve(data)
    })
  })
}

function createS3Bucket() {
  return new Promise((resolve, reject) => {
    s3.createBucket(BUCKET_PARAMS, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

export async function initializeS3Bucket(callback: () => void) {
  try {
    await checkS3Bucket()
    callback()
  } catch (error) {
    const awsError = error as AWSError

    if (awsError.statusCode === 404) {
      console.log(`\nBucket '${BUCKET_PARAMS.Bucket}' not found, creating...`)
      createS3Bucket().then(callback).catch(console.error)
    } else {
      console.log('Something wrong:', error)
    }
  }
}
