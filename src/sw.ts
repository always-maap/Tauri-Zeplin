import { precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

console.log("sw: registered");

self.addEventListener("install", () => {
  console.log("sw: installed");
});

self.addEventListener("activate", () => {
  console.log("sw: activated");
});
