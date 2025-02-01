import { ResolveOptions } from "webpack";
import { buildOptions } from "./types/config";

export const buildResolvers = (options: buildOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"], // для того чтобы читались абсолютные пути
    mainFiles: ["index"],
    alias: {},
  };
};
