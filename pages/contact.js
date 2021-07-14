import React from "react";
import Contact from "../src/components/contact/JobContact";
import Head from "next/head";

import Content1 from "../src/components/content/ContactPageContent1";

import PageHeader from "../src/components/headers/PageHeader";

export default function ContactPage() {
  return (
    <section>
      <Head>
        <title key="title">Contact | Kaiper Construction Group Perth</title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="Contact us today! We offer structural and envelope engineering services As a general provider of engineering services, we supply our customers with everything from a single source. We are active in the Greater Toronto Area."
        />
        <meta
          name="keywords"
          content="engineering gat, engineering toronto, contact engineering link, contact engineering, engineering job toronto, structural engineering contact, structural engineering contact toronto, toronto structural engineering, toronto envelope engineering"
        />
        <meta
          property="og:title"
          content="Contact | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/contact"
        />

        <meta
          property="og:description"
          key="og:description"
          content="Contact us today! We offer structural and envelope engineering services As a general provider of engineering services, we supply our customers with everything from a single source. We are active in the Greater Toronto Area."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/contact" /> */}
      </Head>
      <PageHeader title={"Contact"} />
      <Content1 />

      <Contact />
    </section>
  );
}
