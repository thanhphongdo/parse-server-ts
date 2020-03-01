// import * as Parse from 'parse-server/node';
export interface LogsDataInterface { }

export interface CloundFunction {
    (params: any, request: Parse.Cloud.FunctionRequest): Promise<any>;
}

export interface CloudFunctionInterface<T> {
    call(params: any, request: Parse.Cloud.FunctionRequest): Promise<T>;
}

export class CloudFunctionBase {
    static unauthorized = {
        code: Parse.Error.INVALID_SESSION_TOKEN as number,
        message: 'unauthorized'
    }

    static success(data: any, logsData?: LogsDataInterface) {
        return data;
    }

    static error(data: any, logsData?: LogsDataInterface) {
        return new Parse.Error(data.code || Parse.Error.INTERNAL_SERVER_ERROR, data.message || 'internal server error');
    }

    static errorValidate(data: any, logsData?: LogsDataInterface) {
        return new Parse.Error(Parse.Error.VALIDATION_ERROR, data);
    }

    async defineCloud(cloudFunction: CloundFunction) {
        Parse.Cloud.define(cloudFunction.name, async (req: Parse.Cloud.FunctionRequest) => {
            try {
                var result = await cloudFunction(req.params, req);
                return result;
            } catch (err) {
                throw CloudFunctionBase.error(err);
            }
        });
    }
}