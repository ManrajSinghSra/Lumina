import { inngest } from "./client";


export const hello=inngest.createFunction(
    {name:"hello"},
    {event:"hello/h"},
    async({event,step})=>{

        const data=event.data.data.value

        console.log("Ok");
        return {data}
    }
    
);