const IoTAgent = require('../index')

const agent = new IoTAgent({
    name: 'myapp',
    username: 'admin',
    interval: 2000,
    mqtt: {
      host: 'mqtt://broker'
    }
})

agent.addMetric('rss', function getRss () {
    return process.memoryUsage().rss
})

agent.addMetric('promiseMetric', function getRandomPromise () {
    return Promise.resolve(Math.random())
})

agent.addMetric('callbackMetric', function getRandomCallback (callback) {
    setTimeout(() => {
        callback(null, Math.random())
    }, 1000)
})

agent.connect()

// This agent only
agent.on('connected', handler)
agent.on('disconnected', handler)
agent.on('message', handler)

// This are messages others clients
agent.on('agent/connected', handler)
agent.on('agent/disconnected', handler)
agent.on('agent/message', handler)


function handler(payload){
    console.log(payload)
}

