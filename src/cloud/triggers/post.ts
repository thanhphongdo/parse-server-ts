import { CloudTriggerBase } from '../../parse/index';

export class PostCloud extends CloudTriggerBase {
    constructor() {
        super();
        this.defineTriggerBeforeSave('Post', this.beforeSavePost);
    }

    async beforeSavePost(request: Parse.Cloud.BeforeSaveRequest<Parse.Object<Parse.Attributes>>) {
        if (!request.object.get('view')) {
            request.object.set('view', 1);
            return await request.object.save(null, { useMasterKey: true });
        }
        return Promise.resolve(true);
    }
}