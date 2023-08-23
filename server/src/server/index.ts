import express from "express";
const path = require("path");

const app = express();
const PORT = 3000;
const SHELL_PORT = 3003;

const renderThunk = require("./entry").default;

const defaultRender = renderThunk();
app.get("/", defaultRender);

app.listen(PORT, () => {
  console.info(
    `[${new Date().toISOString()}]`,
    `Shell App is running: 🌎 http://localhost:${PORT}`
  );
});

export default app;
