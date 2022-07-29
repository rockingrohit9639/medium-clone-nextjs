import { createCurrentUserHook, createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// Sanity client for using sanity in our project
export const sanityClient = createClient(config);

// Sanity image builder
const builder = imageUrlBuilder(sanityClient);

// Sanity image url builder
export const urlFor = (source) => builder.image(source);

// Helper function to get current user
export const useCurrentUser = createCurrentUserHook(config);
