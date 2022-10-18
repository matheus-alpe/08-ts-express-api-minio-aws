import { Request, Response } from 'express'
import { listS3Objects, saveObjectOnS3, ListObjectsParams } from '@s3'
import { getFileExtension } from '@utils'
import { v4 } from 'uuid'

class ObjectController {
  async list(req: Request, res: Response) {
    const { type, limit } = req.query

    const params: ListObjectsParams = {}
    if (type) params.Prefix = String(type)
    if (limit) params.MaxKeys = Number(limit)

    const objects = await listS3Objects(params)

    res.json({
      objects
    })
  }

  async save(req: Request, res: Response) {
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
  }
}

export default new ObjectController()
