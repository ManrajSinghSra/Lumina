import { inngest } from "./client";
import { gemini,createAgent } from "@inngest/agent-kit";



export const hello=inngest.createFunction(
    {name:"hello"},
    {event:"hello/h"},
    async({event,step})=>{
        const data=event.data.data.value;

        const codeAgent=createAgent({
            name:"Summarizer",
            system:"You are next.js developer. You write readble, maintainable code. You write the componets like button from scratch.",
            model:gemini({model:"gemini-2.0-flash"})
        })

        const {output}=await codeAgent.run(`Write the code snippet of ${data}`);
        console.log(output[0].content);
        
    

        return {data:output[0].content}
    }
    
);