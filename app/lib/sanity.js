import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-02-26",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const UrlFor = (source) => {
  return builder.image(source);
};
