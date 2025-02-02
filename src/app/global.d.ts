declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import React from "react";

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>; // Используем FC вместо VFC
  export default SVG;
}
