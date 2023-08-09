
type Callback=()=>{};
export class Eventing{
    events:{[key:string]:Callback[]}={}
    //what is on?
    //The on() method attaches one or more event handlers for the selected elements and child elements.
    on(eventName:string,callback:Callback):void{
        const handlers=this.events[eventName]||[];
        handlers.push(callback);
        this.events[eventName]=handlers

    }
    trigger(eventName:string):void{
        const handlers=this.events[eventName];
        if(!handlers||handlers.length===0){
            return;
        }else{
            handlers.forEach(callback=>callback())
        }
    }
}