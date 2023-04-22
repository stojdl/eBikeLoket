import React from "react";
import { LayoutProps } from "./interfaces/LayoutProps";
import Header from "@/fragments/Header";
import Navbar from "@/fragments/Navbar";
import Footer from "@/fragments/Footer";

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
