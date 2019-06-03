export * from './entities'
export * from './migrations'
export * from './graphql'
// export * from './routes'
// export * from './middlewares'

const http = require('http'),
  faye = require('faye')

const server = http.createServer(),
  bayeux = new faye.NodeAdapter({ mount: '/publisher', timeout: 30 })

bayeux.attach(server)
server.listen(8000)

const cron = require('node-cron')
cron.schedule('* * * * * *', () => {
  // console.log('running a task every second')
})
