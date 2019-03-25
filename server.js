if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { join } = require('path')
const express = require('express')
const helmet = require('helmet')
const compression = require('compression')

const app = express()
const port = process.env.PORT || 1337
const publicPath = join(__dirname, 'dist')

app.use(compression())
app.use(helmet())
app.use(express.static(publicPath))

if (app.get('env') === 'development') {
  app.use(require('morgan')('tiny'))
  app.use(require('cors')())
}

app.get('/', (req, res) => {
  res.send('hi')
})

if (app.get('env') === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log('Express is up on port', port)
})
