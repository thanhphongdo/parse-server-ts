import { RequestListBase } from '../request_list_base';
export class RequestListProject extends RequestListBase {
    static validate: any = {}

    page?: number = 1;

    perPage?: number = 10;

    order?: Array<any>;
}
