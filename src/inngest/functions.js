import Sandbox from "@e2b/code-interpreter";
import { inngest } from "./client";
import { gemini,createAgent } from "@inngest/agent-kit";
import { getSandbox } from "./sand";



export const hello=inngest.createFunction(
    {name:"hello"},
    {event:"hello/h"},
    async({event,step})=>{


        const sandboxId=await step.run("get-sandboxId",async()=>{
             const sandbox=await Sandbox.create("yxezvx1tznpjioqqzlfo");
             return sandbox.sandboxId
        })
        const data=event.data.data.value;
        const codeAgent=createAgent({   
            name:"Summarizer",
            system:"You are next.js developer. You write readble, maintainable code. You write the componets like button from scratch.",
            model:gemini({model:"gemini-2.0-flash"})
        })
        const {output}=await codeAgent.run(`Write the code snippet of ${data}`);
        console.log(output[0].content);


         const sandboxUrl=await step.run("get-sandbox-url",async()=>{  
            const sandbox=await getSandbox(sandboxId);
            const host= sandbox.getHost(3000);
            return `https://${host}`
        })
 


        return {data:output[0].content,sandboxUrl}
    }
    
);