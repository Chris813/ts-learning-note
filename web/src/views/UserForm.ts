import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User,UserProps>{

    eventsMap(): {[key:string]: () => void}{
        return {
            'click:.set-name': this.onSetNameClick,
            'click:.set-age': this.onSetAgeClick,
            'click:.save-user': this.onSaveClick
        }
    }

    onSetNameClick=():void=>{
        const input=this.parent.querySelector('input');
        if(input){
            this.model.set({name:input.value});
        }
    }
    onSetAgeClick=():void=>{
        const age=Math.round(Math.random()*100);
        this.model.set({age:age});
    }
    onSaveClick=():void=>{
        this.model.save();
    }
    bindEvents(fragment: DocumentFragment): void{
        const eventsMap = this.eventsMap();
        for(let eventKey in eventsMap){
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    template(): string{
        return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-user">Save</button>
            </div>
        `;
    }

    render():void {
        this.parent.innerHTML='';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);  
        this.parent.append(templateElement.content);
    }
}