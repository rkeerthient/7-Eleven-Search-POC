import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";

const searcher = provideHeadless({
  apiKey: "184b8f65a7921212f4a09118718f3db9",
  experienceKey: "7-eleven-search-poc",
  verticalKey: "products",
  locale: "en",
});
searcher.setSessionTrackingEnabled(true);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/productdetail/:id"
            element={
              <div className="pdPage">
                <ProductDetail />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
