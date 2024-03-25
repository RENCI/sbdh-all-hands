const liveServer = require('live-server')

const params = {
  host: '0.0.0.0',
  root: './dist/',
  file: 'index.html',
  open: true,
}

liveServer.start(params)
