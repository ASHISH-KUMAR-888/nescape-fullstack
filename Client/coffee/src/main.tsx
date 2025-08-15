import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
