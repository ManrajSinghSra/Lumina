import { inngest } from "@/inngest/client";
import { hello } from "@/inngest/functions";
import {serve} from "inngest/next"

export const {GET,POST,PUT}=serve({
    client:inngest,
    functions:[hello]
});