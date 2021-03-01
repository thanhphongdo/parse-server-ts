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
    scrapy: {
        scrapyd: 'http://localhost:6800'
    }
}