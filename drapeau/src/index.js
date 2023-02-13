import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// Toute notre application, passe par getElementById ("root") dans index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
