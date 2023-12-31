import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: "pg7azibkqm",
  apiKey: process.env.API_KEY || "",
});
