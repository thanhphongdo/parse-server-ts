import { ConfigInterface } from './config_interface';

export var Config: ConfigInterface = {
    envName: 'DEBUG',
    parseServer: {
        appId: 'app.id.debug',
        appName: 'app.test',
        cloud: '/cloud/main.js',
        // databaseURI: 'mongodb://root:1nn0r1a@localhost:27017/parse?authSource=admin',
        databaseURI: 'mongodb+srv://root:root@cluster0.cjzgg.mongodb.net/myFirstDatabase',
        masterKey: 'masterkey',
        port: 1337,
        serverURL: 'http://localhost:1337/parse'
    },
    dashboardUser: [
        {
            user: 'root',
            pass: 'r00t'
        }
    ],
    scrapy: {
        scrapyd: 'http://localhost:6800'
    }
}