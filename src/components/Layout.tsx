import React from "react";
import { LayoutProps } from "./interfaces/LayoutProps";
import Header from "@/fragments/Header";
import Navbar from "@/fragments/Navbar";
import Footer from "@/fragments/Footer";

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <main className={`w-screen flex min-h-screen flex-col items-center`}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
