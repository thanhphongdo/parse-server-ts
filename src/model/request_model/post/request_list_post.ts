import { RequestListBase } from '../request_list_base';
import { Validator } from '../../../validate_decorator';

export class RequestListPost extends RequestListBase {
    @Validator.isNotEmpty()
    @Validator.maxLength([5])
    text?: string;
}

Validator.registerSchema(RequestListPost.name);