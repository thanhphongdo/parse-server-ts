import { Validator } from '../../validate_decorator';
import { BaseModel } from '../base_model';

export interface OrderByInterface {
    field: string;
    asc?: boolean;
}

export class RequestListBase extends BaseModel {

    @Validator.isNumber([])
    page?: number = 1;

    @Validator.isNumber([])
    perPage?: number = 10;

    @Validator.isArray()
    order?: Array<OrderByInterface>;
    constructor(page?: number, perPage?: number, order?: Array<OrderByInterface>) {
        super();
        this.page = page || 1;
        this.perPage = perPage || 10;
        this.order = order || [];
    }
}

Validator.registerSchema(RequestListBase.name);