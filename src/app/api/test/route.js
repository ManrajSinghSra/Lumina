import { inngest } from "@/inngest/client"

export const POST=async(req)=>{

    const data=await req.json();

    await inngest.send({
        name:"hello/h",
        data:{data}
    });

    return new Response("Event send");
}