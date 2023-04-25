import React from "react";
import { IconProps } from "./interfaces/IconProps";

export default function Icon(props: IconProps) {
  const { name, ...rest } = props;
  return <img src={`/assets/icons/${name}.svg`} alt="icon" {...rest} />;
}
