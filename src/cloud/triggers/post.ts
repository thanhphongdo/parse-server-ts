// import { CloudTriggerBase } from '../../parse/index';

// export class PostCloud extends CloudTriggerBase {
//     constructor() {
//         super();
//         this.defineTriggerBeforeSave('Post', this.beforeSavePost);
//     }

//     async beforeSavePost(request: Parse.Cloud.BeforeSaveRequest<Parse.Object<Parse.Attributes>>) {
//         request.object.set('view', 0);
//         return await request.object.save(null, { useMasterKey: true });
//     }
// }