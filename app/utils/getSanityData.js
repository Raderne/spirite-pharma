import { client } from "../lib/sanity";

export async function getSanityData(query) {
  const data = await client.fetch(query);
  return data;
}
