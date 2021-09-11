import app from './app'
import logger from './logger'
import { PORT } from './config'
import { connectDatabase } from './database'

connectDatabase()
  .then(async connection => {
    const port = 3000
    app.listen(port, () => logger.info(`Application listening on port ${port}!`))
  })
  .catch(err => {
    console.log(err)
  })
