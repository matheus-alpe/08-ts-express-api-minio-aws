import s3, { BUCKET_PARAMS } from './config'

export function listS3Objects() {
  return new Promise((resolve, reject) => {
    s3.listObjects(BUCKET_PARAMS, (err, data) => {
      if (err) reject(err)
      resolve(data.Contents)
    })
  })
}
