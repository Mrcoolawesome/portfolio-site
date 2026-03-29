import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const p = path.resolve(process.cwd(), 'PhotoOfMe.jpg')
  if (!fs.existsSync(p)) {
    res.status(404).send('Photo not found')
    return
  }
  const stat = fs.statSync(p)
  res.setHeader('Content-Type', 'image/jpeg')
  res.setHeader('Content-Length', stat.size)
  const stream = fs.createReadStream(p)
  stream.pipe(res)
}
