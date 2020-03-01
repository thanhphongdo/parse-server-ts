import { CloudFunctionBase } from '../parse/index';
import { RequestPost, RequestListPost, ResponseListBase, Post } from '../model/index';
import { ParseQueryBase } from '../parse';
import { validate } from 'class-validator';
import { ValidationSchema } from "class-validator";
export let UserValidationSchema: ValidationSchema = { // using interface here is not required, its just for type-safety
    name: "RequestListBase", // this is required, and must be unique
    properties: {
        page: [{
            type: "isNumber", // validation type. All validation types are listed in ValidationTypes class.
            constraints: [2]
        }],
        lastName: [{
            type: "isNumber",
            constraints: [2]
        }]
    }
};

// import { registerSchema } from "class-validator"; 
// registerSchema(UserValidationSchema);

export class PostCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addPost);
        this.defineCloud(this.listPost);
    }

    async addPost(params: RequestPost, request: Parse.Cloud.FunctionRequest): Promise<Post> {
        if (!request.user) {
            throw CloudFunctionBase.unauthorized;
        }
        var post = new Post();
        post.message = params.message;
        post.like = params.like;
        post.user = request.user as any;
        return await post.saveAsync<Post>(null, { useMasterKey: true });
    }

    async listPost(params: RequestListPost, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<Post>> {
        let check = await RequestListPost.validate(params);
        if (check.length) throw CloudFunctionBase.errorValidate(check);
        let postQuery = new ParseQueryBase(Post);
        params.perPage = params.perPage || 10;
        params.page = params.page || 1;
        postQuery.limit(params.perPage);
        postQuery.skip(params.perPage * (params.page - 1));
        postQuery.include('user');
        let data = await postQuery.findAsync<Post>({ useMasterKey: true });
        let user = data[0].user;
        let test = Math.ceil(Math.random() * 1000);
        user.set('test', test);
        await user.save(null, { useMasterKey: true });
        console.log(user);
        return new ResponseListBase<Post>(1, 10, data);
    }
}