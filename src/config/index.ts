import DefaultConfig from 'castle-config/dist/index';
export default class config extends DefaultConfig {
    async getDbConfig() {
        let r = await super.getDbConfig()
        r.options.logging = console.log;
        return r;
    }
}