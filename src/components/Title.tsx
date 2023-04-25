import React from "react";
import { TitleProps } from "./interfaces/TitleProps";

export default function Title(props: TitleProps) {
  const { level, children } = props;
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <HeadingTag>{children}</HeadingTag>;
}
