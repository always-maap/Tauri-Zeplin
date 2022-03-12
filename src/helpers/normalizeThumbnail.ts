import { CDN_URL } from "../constants/api";

export const getThumbnailencoded = (projectId: string, thumbnail: string) => {
  const screenId = thumbnail.match(/screens\/(.*).png/)![1];
  return encodeURIComponent(`${CDN_URL}/${projectId}/screens/${screenId}.png`);
};
