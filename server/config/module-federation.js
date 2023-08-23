const deps = require("../package.json").dependencies;
const {
  NodeFederationPlugin,
  StreamingTargetPlugin,
} = require("@module-federation/node");

module.exports = {
  server: [
    new NodeFederationPlugin({
      name: "server",
      library: { type: "commonjs-module" },
      filename: "remoteEntry.js",
      remotes: {
        shell: "shell@http://localhost:3003/server/remoteEntry.js",
      },
      shared: [{ react: deps.react, "react-dom": deps["react-dom"] }],
    }),
    new StreamingTargetPlugin({
      name: "server",
      library: { type: "commonjs-module" },
      remotes: {
        shell: "shell@http://localhost:3003/server/remoteEntry.js",
      },
    }),
  ],
};
