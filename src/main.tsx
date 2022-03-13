import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/_app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./styles/index.css";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";

dayjs.extend(relativeTime); // use plugin
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "just now",
    m: "am",
    mm: "%dm",
    h: "an h",
    hh: "%dh",
    d: "a d",
    dd: "%dd",
    M: "a m",
    MM: "%dm",
    y: "a year",
    yy: "%dyears",
  },
});

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
