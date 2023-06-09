import React from "react";
import Introduction from "@/fragments/Introduction";
import Layout from "@/components/Layout";
import WhereToGo from "@/fragments/WhereToGo";

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <WhereToGo />
    </Layout>
  );
}
