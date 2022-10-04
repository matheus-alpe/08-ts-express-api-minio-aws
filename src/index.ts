import initializeExpress from './server'
import { initializeS3Bucket } from '@s3'

initializeS3Bucket(initializeExpress)
