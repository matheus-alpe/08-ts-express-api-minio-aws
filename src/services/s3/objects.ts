import s3, { BUCKET_PARAMS } from './config'
import { PutObjectRequest } from 'aws-sdk/clients/s3'

export function listS3Objects() {
  return new Promise((resolve, reject) => {
    s3.listObjects(BUCKET_PARAMS, (err, data) => {
      if (err) reject(err)
      resolve(data.Contents)
    })
  })
}

interface File {
  Key: string
  Body: Buffer
  ContentType: string
}

export function saveObjectOnS3(file: File) {
  const params: PutObjectRequest = {
    ...BUCKET_PARAMS,
    ...file
  }

  return new Promise((resolve, reject) => {
    s3.putObject(params, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
