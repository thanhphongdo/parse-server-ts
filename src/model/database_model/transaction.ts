import { ParseObjectBase } from '../../parse';
import { User } from './user';

export enum EventStatus {
    WAITING = 0,
    APPROVE = 1,
    DECLINE = 2
}

export class Event extends ParseObjectBase {
    constructor() {
        super(Event.name);
    }

    get message(): string {
        return this.get('content');
    }

    set message(value: string) {
        this.set('content', value);
    }

    get sender(): User {
        return new User(this.get('sender').toJSON());
    }

    set sender(value: User) {
        this.set('sender', value);
    }

    get receiver(): User {
        return new User(this.get('receiver').toJSON());
    }

    set receiver(value: User) {
        this.set('receiver', value);
    }


    get amount(): number {
        return this.get('amount');
    }

    set amount(value: number) {
        this.set('amount', value);
    }

    get members(): Array<string> {
        return this.get('members');
    }

    set members(value: Array<string>) {
        this.set('members', value);
    }

    get prePaid(): Array<string> {
        return this.get('prePaid');
    }

    set prePaid(value: Array<string>) {
        this.set('prePaid', value);
    }

    get sponsors(): Array<string> {
        return this.get('sponsors');
    }

    set sponsors(value: Array<string>) {
        this.set('sponsors', value);
    }

    get status(): number {
        return this.get('status');
    }

    set status(value: number) {
        this.set('status', value);
    }

    get date(): Date {
        return this.get('date');
    }

    set date(value: Date) {
        this.set('date', value);
    }
}