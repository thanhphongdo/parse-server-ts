import { ConfigInterface } from './config_interface';

export var Config: ConfigInterface = {
    envName: 'DEBUG',
    parseServer: {
        appId: 'app.id.debug',
        mountPath: '/parse',
        appName: 'app.test',
        cloud: '/cloud/main.js',
        databaseURI: 'mongodb+srv://root:root@cluster0.cjzgg.mongodb.net/myFirstDatabase',
        masterKey: 'masterkey',
        port: 1337,
        serverURL: 'http://localhost:1337'
    },
    dashboardUrl: '/-board',
    addDocs: true
}