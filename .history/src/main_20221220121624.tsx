// main.tsx
// Using React 18

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import acquireSessionId from "./utils/acquireSessionId";

const searcher = provideHeadless({
  apiKey: "184b8f65a7921212f4a09118718f3db9",
  experienceKey: "7-eleven-search-poc",
  verticalKey: "products",
  locale: "en",
});
searcher.setSessionTrackingEnabled(true);
const sessionId = acquireSessionId();
sessionId && searcher.setSessionId(sessionId);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
