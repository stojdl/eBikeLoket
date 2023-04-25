import IconText from "@/components/IconText";
import Title from "@/components/Title";
import React from "react";

export default function Header() {
  return (
    <div className="relative w-full h-64 px-4 pb-2 flex flex-col justify-end text-white md:px-10 md:pb-4 xl:px-20 xl:h-96 bg-gradient-to-b from-transparent via-transparent to-black">
      <Title level={1}>Půjčovna elektrokol Loket</Title>
      <div className="w-full mt-2 flex flex-col space-y-1 sm:mt-4 xl:mt-8 sm:flex-row sm:items-center sm:justify-between">
        <IconText name="placeholder-white" text="info@ebikeloket.cz" />
        <IconText name="placeholder-white" text="+420 777 117 133" />
        <IconText name="placeholder-white" text="Lužná 622, 357 33 Loket" />
      </div>
      {/* <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div> */}
    </div>
  );
}
