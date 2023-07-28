import { Mappable } from './CustomMap';
import faker from 'faker';
//导出不要使用default，因为default只能导出一个；都用{}来接收
export class User implements Mappable{
    name:string;
    location:{
        lat:number;
        lng:number;
    };
    color:string='red';
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        };
    }
    markerContent():string{
        return `User Name: ${this.name}`;
    }
}