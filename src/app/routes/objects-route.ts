import { Router } from 'express'
import { v4 } from 'uuid'
import { getFileExtension } from '@utils'
import { UPLOAD } from '@multer'
import { listS3Objects, saveObjectOnS3 } from '@s3'

const route = Router()

route.get('/', async (req, res) => {
  const objects = await listS3Objects()

  res.json({
    objects
  })
})

route.post('/', UPLOAD.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: 'missing file'
    })
  }

  const { originalname, mimetype, buffer } = req.file
  const folderPath = getFileExtension(originalname)

  const object = await saveObjectOnS3({
    Key: `${folderPath}/${v4()}_${originalname}`,
    Body: buffer,
    ContentType: mimetype
  })

  res.json({
    object
  })
})

export default route
