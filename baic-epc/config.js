var config = {
  db: {
    connectStringList: [
      'mongodb://10.0.0.80:27017/error'
    ]
  },
  server: {
    host: '10.0.0.30',
    port: 1280,
    requestPrefix: ['/baic-epcm', '/baic-core']
  },
  epcm: {
    host: '10.0.0.80',
    port: 8001,
    path: {
      login: '/login'
    }
  },
  mongodbSession: {
    secret: 'test',
    name: 'test',
    rolling: true,
    cookie: {
      maxAge: 1000 * 60 * 300
    },
    resave: false,
    saveUninitialized: true,
    storeUrl: 'mongodb://127.0.0.1:27017/session'
  },
  redisSession: {
    client: null,
    host: '10.0.0.80',
    port: 6379,
    socket: null,
    ttl: 60 * 30, //过期时间，单位s
    disable: false, //禁用自定义的ttl
    db: '',
    pass: '',
    prefix: '', //数据表前缀，默认为'sess:',
    secret: 'test',
    resave: false,
    saveUninitialized: true
  }
};

module.exports = config;