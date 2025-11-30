import { inngest } from "./client";


export const hello=inngest.createFunction(
    {name:"hello"},
    {event:"hello/h"},
    async({event,step})=>{

        console.log("Ok");
        return {hello:event.data}
    }
    
);