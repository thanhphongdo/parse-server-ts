import { ConfigInterface } from './config_interface';

export var Config:ConfigInterface = {
    envName: 'PROD',
    parseServer:{},
    scrapy: {
        scrapyd: 'http://localhost:6800'
    }
}