import { Validator } from '../validate_decorator';

export class BaseModel {
    static async validate(obj: any) {
        return await Validator.validate(this.name, obj);
    }
}