import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";
import { ROUTES } from "./Navbar";
import Title from "@/components/Title";
import IconText from "@/components/IconText";

export default function Footer() {
  return (
    <section className="w-full h-screen px-4 py-8 flex flex-col justify-between bg-black text-white sm:py-16 md:px-16 md:py-20 lg:h-auto lg:pb-10 xl:px-40">
      <div className="w-full h-full flex flex-col lg:h-auto lg:flex-row lg:space-y-0 lg:space-x-20">
        <div className="grid place-items-center ">
          <Icon
            name="placeholder-white"
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
        </div>
        <div className="w-full h-full py-8 flex flex-col justify-between space-y-8 sm:py-16 lg:h-auto lg:py-0 lg:flex-row lg:space-y-0 ">
          <div className="space-y-2 ">
            <Link
              href={ROUTES.introduction}
              className="block uppercase underline"
            >
              úvod
            </Link>
            <Link href={ROUTES.eBikes} className="block uppercase underline">
              elektrokola
            </Link>
            <Link
              href={ROUTES.howRentingWorks}
              className="block uppercase underline"
            >
              jak půjčení probíhá
            </Link>
            <Link href={ROUTES.order} className="block uppercase underline">
              řád
            </Link>
            <Link href={ROUTES.contact} className="block uppercase underline">
              kontakt
            </Link>
          </div>
          <div className="space-y-2">
            <Title level={4}>Poptávky:</Title>
            <IconText name="placeholder-white" text="info@ebikeloket.cz" />
            <IconText name="placeholder-white" text="+420 777 117 133" />
            <IconText name="placeholder-white" text="Lužná 622, 357 33 Loket" />
            <Link href="#" className="block underline">
              Vyplnit nezávaznou poptávku
            </Link>
          </div>
          <div className="space-y-2">
            <Title level={4}>Provozní doba:</Title>
            <p className="font-bold">Dle objednávek</p>
            <p>Po až Ne od 8h do 21h </p>
          </div>
        </div>
      </div>
      <p className="w-full space-x-3 md:space-x-4 md:text-right lg:mt-10">
        <span>eBike Loket</span>
        <span>·</span>
        <span>{new Date().getFullYear()}</span>
        <span>·</span>
        <span>Všechna práva vyhrazena.</span>
      </p>
    </section>
  );
}
