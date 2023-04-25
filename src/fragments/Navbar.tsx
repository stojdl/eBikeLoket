import Icon from "@/components/Icon";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import React, { useState } from "react";

export const ROUTES = {
  introduction: "/",
  eBikes: "/eBikes",
  howRentingWorks: "/HowRentingWorks",
  order: "/Order",
  contact: "/Contact",
};

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Icon
        name={isOpen ? "placeholder-white" : "placeholder"}
        className="absolute z-20 inset-4 w-10 h-10 sm:hidden"
        onClick={() => setOpen((p) => !p)}
      />
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed z-10 w-screen h-screen bg-black sm:hidden`}
      ></div>
      <div className="hidden sm:flex w-full h-16 px-4 items-center justify-between space-x-4 md:px-10 xl:h-20 xl:px-20">
        <NavLink href={ROUTES.introduction}>úvod</NavLink>
        <NavLink href={ROUTES.eBikes}>elektrokola</NavLink>
        <NavLink href={ROUTES.howRentingWorks}> jak půjčení probíhá</NavLink>
        <NavLink href={ROUTES.order}> řád</NavLink>
        <NavLink href={ROUTES.contact}>kontakt</NavLink>
      </div>
    </>
  );
}
