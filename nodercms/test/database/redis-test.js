const Redis = require('ioredis');
const redis = new Redis(6379, '127.0.0.1');

redis.get('hello', 'npde-redis')
redis.get('hello', function (err, result) {
  console.log(result);
});
