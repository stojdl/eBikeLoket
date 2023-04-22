import React from "react";
import EbikesForRent from "@/fragments/eBikesForRent";
import Layout from "@/components/Layout";
import WhereToGo from "@/fragments/WhereToGo";

export default function eBikes() {
  return (
    <Layout>
      <EbikesForRent />
      <WhereToGo />
    </Layout>
  );
}
