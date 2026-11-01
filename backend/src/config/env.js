import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(4000),  //Coerce converts any datatype to the datatype stated before validating
    NODE_ENV: z.enum(["development","production","test"]).default("development "),
    CLIENT_URL: z.string().url().default("http://localhost:5173")
});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success){
    console.error("Invalid environment variables: ", parsedEnv.error.flatten().fieldErrors);
    process.exit(1);
}

export const env = parsedEnv.data;