import { config } from "dotenv";
//if single
//config({path:'.env'})
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, DB_URI, NODE_ENV } = process.env;
















//security(appstash),efficiency,speed
//musk for video