import { ParseObjectBase } from '../../parse';
import { User } from './user';

export class Post extends ParseObjectBase {
    constructor() {
        super(Post.name);
    }

    get message(): string | undefined {
        return this.get('message');
    }

    set message(value: string | undefined) {
        this.set('message', value);
    }

    get like(): number | undefined {
        return this.get('like');
    }

    set like(value: number | undefined) {
        this.set('like', value);
    }

    get user(): User {
        return new User(this.get('user').toJSON());
    }

    set user(value: User) {
        this.set('user', value);
    }
}