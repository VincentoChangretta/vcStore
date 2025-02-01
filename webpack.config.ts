import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { buildEnvs, buildPaths } from "./config/build/types/config";

module.exports = (env: buildEnvs) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  const paths: buildPaths = {
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "main.tsx"),
    build: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
  };
  const isDev = mode === "development";

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
