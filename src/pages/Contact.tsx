import React from "react";
import Contacts from "@/fragments/Contacts";
import DemandForm from "@/fragments/DemandForm";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Contacts />
      <DemandForm />
    </Layout>
  );
}
