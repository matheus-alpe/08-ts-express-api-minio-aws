import s3 from './config'
import { HeadBucketRequest } from 'aws-sdk/clients/s3'

export function listS3Buckets() {
  return new Promise((resolve, reject) => {
    s3.listBuckets(function (err, data) {
      if (err) reject(err)
      resolve(data.Buckets)
    })
  })
}

export function checkS3Bucket(params: HeadBucketRequest) {
  return new Promise((resolve, reject) => {
    s3.headBucket(params, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
