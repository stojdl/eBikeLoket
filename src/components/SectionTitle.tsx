import React from "react";
import Title from "./Title";
import { SectionTitleProps } from "./interfaces/SectionTitleProps";

export default function SectionTitle(props: SectionTitleProps) {
  const { children } = props;
  return (
    <div className="absolute inset-0 w-full h-max">
      <img
        src="/assets/svg/title-background.svg"
        className="w-full h-10 object-cover sm:h-auto"
      />
      <div className="absolute top-1/3 left-0 z-10 transform -translate-y-1/2 w-full text-white text-center uppercase tracking-wide sm:top-1/2">
        <Title level={2}>{children}</Title>
      </div>
    </div>
  );
}
