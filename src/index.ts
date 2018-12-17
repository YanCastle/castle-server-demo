import server from 'castle-server/dist/index'
import { install } from 'castle-router/dist/index'
import { install as installWS } from '../../castle-ws-rpc-server/dist'
import { time } from './use'
server.install({ install })
server.install({ install: installWS })
// server.install({
//     install: (that, koa, config) => {
//         koa.use(time)
//     }
// })
server.start(9090);