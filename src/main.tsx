import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import Header from "./components/Header/index.tsx";
import ErrorBoundary from "./components/ErrorBoundary/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <React.StrictMode>
      <Header />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>,
);
