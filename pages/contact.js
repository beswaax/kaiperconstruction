import React from "react";
import Contact from "../src/components/contact/Contact";
import Head from "next/head";

import Content1 from "../src/components/content/ContactPageContent1";

import PageHeader from "../src/components/headers/PageHeader";

export default function ContactPage() {
  return (
    <section>
      <Head>
        <title key="title">Contact | Kaiper Construction Group Perth</title>{" "}
      </Head>
      <PageHeader title={"Contact"} />
      <Content1 />

      <Contact />
    </section>
  );
}
