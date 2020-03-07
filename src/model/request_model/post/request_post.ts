import { BaseModel } from '../../base_model';
import { Validator } from '../../../validate_decorator';

export class RequestPost extends BaseModel {
    @Validator.isNotEmpty()
    message?: string;

    @Validator.isNumber([])
    like?: number;

    @Validator.isNotEmpty()
    text?: string;
}
Validator.registerSchema(RequestPost.name);