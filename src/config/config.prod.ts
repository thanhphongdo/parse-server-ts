import { ConfigInterface } from './config_interface';

export var Config:ConfigInterface = {
    envName: 'PROD',
    parseServer:{},
    dashboardUser: [
        {
            user: 'root',
            pass: 'r00t'
        }
    ],
    dashboardUrl: '/-board',
    addDocs: false
}