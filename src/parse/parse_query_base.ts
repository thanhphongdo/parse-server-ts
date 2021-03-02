import { ParseObjectBase } from '../parse/parse_object_base';
export class ParseQueryBase extends Parse.Query {
    objClass: any;
    constructor(objClass: any) {
        super(objClass.name);
        this.objClass = objClass
    }

    async findAsync<T>(options?: Parse.Query.FindOptions): Promise<Array<T>> {
        var data = await super.find(options);
        return ParseObjectBase.newArrayObject(data, this.objClass);
    }

    async findAllAsync<T>(options?: Parse.Query.BatchOptions): Promise<Array<T>> {
        var data = await super.findAll(options);
        return ParseObjectBase.newArrayObject(data, this.objClass);
    }

    async firstAsync<T>(options?: Parse.Query.FindOptions): Promise<T | undefined> {
        var data = await super.first(options);
        if (data) {
            return ParseObjectBase.newObject(data, this.objClass);
        }
        return Promise.resolve(undefined);
    }

    async getAsync<T>(objectId: string, options?: Parse.Query.FindOptions): Promise<T> {
        var data = await super.get(objectId, options);
        return ParseObjectBase.newObject(data, this.objClass);
    }
}