import BaseController from 'castle-controller/dist/base_controller';
export default class Test extends BaseController {
    async test() {
        // await timeout(1000)
        // await timeout(1000)
        // await timeout(1000)
        let r = await this.R('Sex').where({ UID: { gt: 0 } }).find()
        return r;
    }
}