import { UserProps } from "./User";

export class Attributes<T>{
    constructor(private data:T){}

    get=<K extends keyof T>(key:K):T[K]=>{
        return this.data[key];
    }
    set=(update:T):void=>{
        //what is Object.assign?
        //Object.assign(target, ...sources)
        //The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
        Object.assign(this.data,update)
    }
    getAll():T{
        return this.data;
    }
}

