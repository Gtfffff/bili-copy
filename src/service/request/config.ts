// axios 的配置代码
let BASE_URL = ''
const TIMEOUT = 1000

if (process.env.NODE_ENV == 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = '127.0.0.1:8888'
}

export { BASE_URL, TIMEOUT }
