import React from "react";
import { ButtonProps } from "./interfaces/ButtonProps";
import Link from "next/link";
import Icon from "./Icon";

export default function Button(props: ButtonProps) {
  const { children, icon, link, className } = props;
  return (
    <Link
      href={link}
      className={`w-full py-3 flex items-center justify-center bg-primary hover:bg-black text-white md:w-max md:px-10 md:py-4 ${className}`}
    >
      {icon && <Icon name={icon} className="mr-4" />}
      <p>{children}</p>
    </Link>
  );
}
