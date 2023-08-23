import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../components/App";
import "../components/main.css";

const domNode = document.getElementById("root");
const root = hydrateRoot(domNode, <App />);
