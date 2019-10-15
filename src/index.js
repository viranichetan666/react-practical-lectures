import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// let { registerObserver } = require("react-perf-devtool");

// let options = {
//   shouldLog: true,
//   port: 8080
// };

// function callback(measures) {
//   console.log("measures", measures);
//   // do something with the measures
// }

// registerObserver(options, callback);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
