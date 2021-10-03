import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const renderDOM = () => {
  document.getElementById("rootHTML").innerHTML = `
  <div>Hello HTML
  <input />
<pre>${new Date().toLocaleTimeString()}</pre>
</div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement("input", null),
      React.createElement("pre", null, new Date().toLocaleTimeString())
    ),
    document.getElementById("rootReact")
  );
};
setInterval(renderDOM, 1000);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
