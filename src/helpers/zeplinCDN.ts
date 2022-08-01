import { CDN_URL } from "../constants/api";

export const convertPublicCDN = (url: string) => {
  return url.replace("public-", "").replace(".dev", ".io").replace(/\?.+/, "");
};

export const getThumbnailencoded = (projectId: string, thumbnail: string) => {
  const screenId = thumbnail.match(/screens\/(.*).png/)![1];
  return encodeURIComponent(zeplinCDN(projectId, screenId));
};

export const getSectionEncoded = (url: string) => {
  const newUrl = convertPublicCDN(url);
  return encodeURIComponent(newUrl);
};

const zeplinCDN = (projectId: string, screenId: string) => {
  return `${CDN_URL}/${projectId}/screens/${screenId}.png`;
};
