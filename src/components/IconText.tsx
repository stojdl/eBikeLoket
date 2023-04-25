import React from "react";
import Icon from "./Icon";
import { IconTextProps } from "./interfaces/IconTextProps";

export default function IconText(props: IconTextProps) {
  const { name, text } = props;
  return (
    <div className="flex items-center space-x-4">
      <Icon name={name} className="w-4 h-4 xl:w-6 xl:h-6" />
      <span>{text}</span>
    </div>
  );
}
