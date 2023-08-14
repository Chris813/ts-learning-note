import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";


export class UserEdit extends View<User,UserProps>{
    template(): string{
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
    }
    regionsMap(): { [key: string]: string; } {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        }
    }
    //组合视图渲染
    onRender(): void {
        this.render()
        new UserShow(this.regions.userShow,this.model).render();
        new UserForm(this.regions.userForm,this.model).render();
    }
}