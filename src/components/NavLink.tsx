import Link from "next/link";
import React from "react";
import { NavLinkProps } from "./interfaces/NavLinkProps";
import { useRouter } from "next/router";

export default function NavLink(props: NavLinkProps) {
  const { href, children } = props;

  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={`px-3 py-2 font-bold uppercase tracking-wide ${
        asPath == href ? "bg-black text-white" : ""
      } md:px-4 md:py-2 lg:px-10 hover:bg-primary hover:text-white`}
    >
      {children}
    </Link>
  );
}
