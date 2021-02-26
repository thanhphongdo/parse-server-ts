export interface ConfigInterface {
    envName: string;
    parseServer: {
        appName?: string;
        databaseURI?: string;
        cloud?: string;
        appId?: string;
        masterKey?: string;
        port?: number;
        serverURL?: string;
        publicServerURL?: string;
        liveQuery?: {
            classNames: string[];
        },
        maxUploadSize?: string;
    };
    dashboardUser?: Array<{
        user?: string;
        pass?: string;
    }>;
    [key: string]: any;
    scrapy: {
        scrapyd: string;
    }
}