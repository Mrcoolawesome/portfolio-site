import fs from 'fs'
import path from 'path'

const MIME = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  mp4: 'video/mp4',
  webm: 'video/webm',
}

export const config = {
  api: {
    responseLimit: false,
  },
}

export default function handler(req, res) {
  const q = req.query.path
  if (!q) {
    res.status(400).send('missing path')
    return
  }
  const rel = decodeURIComponent(q)
  const full = path.resolve(process.cwd(), rel)
  if (!full.startsWith(process.cwd())) {
    res.status(403).send('forbidden')
    return
  }
  if (!fs.existsSync(full)) {
    res.status(404).send('not found')
    return
  }
  const ext = path.extname(full).replace('.', '').toLowerCase()
  const mime = MIME[ext] || 'application/octet-stream'
  const stat = fs.statSync(full)
  res.setHeader('Content-Type', mime)
  res.setHeader('Content-Length', stat.size)
  const stream = fs.createReadStream(full)
  stream.pipe(res)
}
