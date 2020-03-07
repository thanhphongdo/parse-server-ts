import { RequestListBase } from '../request_list_base';
import { Validator } from '../../../validate_decorator';

export class RequestListPost extends RequestListBase {
    @Validator.isNotEmpty()
    text?: string;
}

Validator.registerSchema(RequestListPost.name);