import server from '@ctsy/server/dist/index'
import { install } from '@ctsy/router/dist/index'
import { time } from './use'
import { resolve } from 'path';
import * as chokidar from 'chokidar';
server.install({ install })
// server.install({ install: installWS })
// server.install({
//     install: (that, koa, config) => {
//         koa.use(time)
//     }
// })
chokidar.watch('dist/**/*.js', { ignored: /dist\/[a-zA-Z]{1,}\.js/ }).on('all', (event, file) => {
    if (require.cache[resolve(file)]) {
        delete require.cache[resolve(file)]
    }
})
server.start(9090);