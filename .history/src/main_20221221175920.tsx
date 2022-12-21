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
import { ProdContextProvider } from "./context/prodContext";

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
      <ProdContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
        <App />
      </ProdContextProvider>
    </SearchHeadlessProvider>
  </React.StrictMode>
);
