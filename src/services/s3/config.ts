import { S3 } from 'aws-sdk'

const { S3_BASE_URL, S3_KEY, S3_SECRET, S3_BUCKET } = process.env

export const BUCKET_PARAMS = {
  Bucket: String(S3_BUCKET)
}

export default new S3({
  endpoint: S3_BASE_URL,
  accessKeyId: S3_KEY,
  secretAccessKey: S3_SECRET,
  sslEnabled: false,
  s3ForcePathStyle: true
})
