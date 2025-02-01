export type buildMods = "development" | "production";

export interface buildPaths {
  html: string;
  entry: string;
  build: string;
  src: string;
}

export interface buildEnvs {
  mode: buildMods;
  port: number;
}

export interface buildOptions {
  mode: buildMods;
  paths: buildPaths;
  isDev: boolean;
  port: number;
}
