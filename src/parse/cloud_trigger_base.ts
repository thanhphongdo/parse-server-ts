import { CloudBase } from './cloud_base';

export interface CloudTrigger {
    (request: Parse.Cloud.BeforeSaveRequest<Parse.Object<Parse.Attributes>>): Promise<any>;
}

export class CloudTriggerBase extends CloudBase {
    async defineTriggerBeforeSave(objectName: string, cloudTriggerBeforeSave: CloudTrigger) {
        Parse.Cloud.beforeSave(objectName, async (request) => {
            await cloudTriggerBeforeSave(request);
        });
    }
}