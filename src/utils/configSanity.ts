import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zeu22vec",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_TOKEN,
});
