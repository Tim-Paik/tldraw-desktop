import ReactDOM from "react-dom";
import "./index.css";
import "./fonts.css";
import { Tldraw } from "@tldraw/tldraw";

ReactDOM.render(
  <main className="tldraw">
    <Tldraw />
  </main>,
  document.getElementById("root")
);
