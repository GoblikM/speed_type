import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <App />
  </BrowserRouter>
);
