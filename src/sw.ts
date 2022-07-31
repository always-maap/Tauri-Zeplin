export {};

console.log("sw: registered");

import { precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", () => {
  console.log("sw: installed");
});

self.addEventListener("activate", () => {
  console.log("sw: activated");
});
