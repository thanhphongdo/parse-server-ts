import { ConfigInterface } from './config_interface';

export var Config: ConfigInterface = {
    envName: 'DEV',
    parseServer: {
        appId: 'app.id',
        mountPath: '/parse',
        appName: 'app.test',
        cloud: '/cloud/main.js',
        databaseURI: 'mongodb+srv://root:abc123ABC@cluster0-iogft.mongodb.net/enstu',
        masterKey: 'masterkey',
        port: 1337,
        serverURL: 'http://localhost:1337'
    },
    dashboardUrl: '/-board',
    addDocs: true
}