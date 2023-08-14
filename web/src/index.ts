import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import {User, UserProps} from './models/User'


// const userform=new UserForm(document.getElementById('root'),user);
// userform.render();
// const usershow=new UserShow(document.getElementById('root'),user);
// usershow.render();
const usercollection=new Collection('http://localhost:3000/users',(json:UserProps)=>User.buildUser(json));
usercollection.on('change',()=>{
    const root=document.getElementById('root');
    const userList=new UserList(root,usercollection)
    userList.render();
})
usercollection.fetch()

