import { S3 } from 'aws-sdk'

const { S3_BASE_URL, S3_KEY, S3_SECRET } = process.env

export default new S3({
  endpoint: S3_BASE_URL,
  accessKeyId: S3_KEY,
  secretAccessKey: S3_SECRET,
  sslEnabled: false,
  s3ForcePathStyle: true
})
