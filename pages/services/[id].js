import React from "react";
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";

import PageHeader from "../../src/components/headers/PageHeader";

import Content1 from "../../src/components/content/ServicesPageContent1";
import Content2 from "../../src/components/content/ServicesPageContent2";
import Content3 from "../../src/components/content/ServicesPageContent3";

import Content6 from "../../src/components/content/ServicesContent6";

import Head from "next/head";

const contents = [
  {
    id: 1,
    title: "Civil Engineering",
    content1: {
      img: "/assets/pic1.png",
      content1Title: "Our services",
      content1Advantages: [
        "Commercial buildings",
        "Chief Risk Officer",
        "Schools",
        "Sports halls",
        "Church buildings",
        "Sewage plants",
        "Elevated tanks",
        "Housing",
        "Construction services",
        "Turnkey construction",
      ],
    },
    content2: {
      img: "/assets/pic2.png",
      content2Title: "Best quality at a fair price",
      content2Desc1:
        "For Kaiper, excellent workmanship and the associated know-how are the guarantors of success in civil engineering. Thanks to reliable planning and execution, many years of experience and smooth cooperation with the planners and companies involved, all orders are carried out professionally.",
      content2Desc2:
        "The fourfold competence makes it possible for the Kaiper group of companies to carry out earthworks itself and to use its own prefabricated parts as well as its own ready-mixed concrete. In addition, constant performance optimization and the best construction quality at a fair price are guaranteed.",
    },
    content3: {
      title: "Your contact person",
      subtitle: "For civil engineering services",
      team: [
        {
          name: "Terry Lake",
          education: "Civil Engineer",
          position: "Executive Partner",
          phone: "08-8395-6063 + 1",
          email: "terry@kaiper.com",
          image: "/assets/expert/1.jpg",
        },
        {
          name: "Jake Aksen",
          education: "Civil Engineer",
          position: "Managing director",
          phone: "08-8395-6063 + 2",
          email: "jake@kaiper.com",
          image: "/assets/expert/2.jpg",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Concrete works",
    content1: {
      img: "/assets/pic6.png",
      content1Title: "Our services",
      content1Advantages: [
        "Production & delivery of ready-mixed concrete",
        "11 Transport concrete mixers",
        "Great variety of concrete types",
        "Colored concrete",
        "Concrete pumping service",
        "Concrete pumps 32m and 42m booms",
      ],
    },
    content2: {
      img: "/assets/pic7.png",
      content2Title: "Advanced processing with our own aggregates",
      content2Desc1:
        "Kaiper combines advanced processing techniques with optimal use of materials and can fall back on its own aggregates from the gravel works. The versatility of concrete as a material offers possible uses in a wide variety of areas in the construction industry.",
      content2Desc2:
        "By adding various additives, the natural building material can be optimally adapted to the requirements of the desired exposure class. Strict controls in the in-house concrete laboratory guarantee consistently high quality. Our own fleet of vehicles enables needs-based and timely delivery.",
    },
    content3: {
      title: "Your contact person",
      subtitle: "For concrete works",
      team: [
        {
          name: "Monroe Lawrence",
          education: "MBA",
          position: "Executive Partner",
          phone: "08-8395-6063 + 5",
          email: "monroe@kaiper.com",
          image: "/assets/expert/5.jpg",
        },
        {
          name: "Denholm Deven",
          education: "Mechanical Engineering Master's",
          position: "Technical Director",
          phone: "08-8395-6063 + 6",
          email: "denholm@kaiper.com",
          image: "/assets/expert/6.jpg",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Precast plant",
    content1: {
      img: "/assets/pic8.png",
      content1Title: "Our services",
      content1Advantages: [
        "Double wall",
        "Element ceiling",
        "Solid wall",
        "Custom-made parts",
      ],
    },
    content2: {
      img: "/assets/pic7.png",
      content2Title: "Cost and time savings",
      content2Desc1:
        "When the company was founded, considerations were made to reduce costs on the construction sites. This led to field production for filigree ceilings in 1973 - the first in the Perth area. After further expansion stages, an automated production plant for ceiling and wall elements as well as for solid walls and other prefabricated parts was built between 1982 and 1992. These products are mainly used in residential, commercial and industrial construction and within a radius of up to 150km.",
      content2Desc2:
        "Building with prefabricated parts is not only contemporary, it also means enormous cost and time savings. Automated production systems and flexible formwork techniques allow the production of prefabricated parts for any shape and size with all the required built-in parts - made with the company's own concrete. The range of services includes structural planning, static calculations, all plan executions as well as delivery and assembly of the prefabricated parts. In the years 2012 to 2014, the entire precast plant was brought up to date with the latest technology.",
    },
    content3: {
      title: "Your contact person",
      subtitle: "For precast services",
      team: [
        {
          name: "Monroe Lawrence",
          education: "MBA",
          position: "Executive Partner",
          phone: "08-8395-6063 + 5",
          email: "monroe@kaiper.com",
          image: "/assets/expert/5.jpg",
        },
        {
          name: "Denholm Deven",
          education: "Mechanical Engineering Master's",
          position: "Technical Director",
          phone: "08-8395-6063 + 6",
          email: "denholm@kaiper.com",
          image: "/assets/expert/6.jpg",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Haulage services",
    content1: {
      img: "/assets/pic9.png",
      content1Title: "Our fleet",
      content1Advantages: [
        "3-axle (3-sided tipper)",
        "4-axis",
        "Tandem trailer truck",
        "Tipper trailer",
        "Street sweeper",
        "Low loader",
        "Inloader",
        "Transport concrete mixer (7.5 m³; 9.5 m³)",
      ],
    },
    content2: {
      img: "/assets/pic1.png",
      content2Title: "Extensive and modern vehicle fleet",
      content2Desc1:
        "With an extensive modern machine and vehicle fleet, the youngest company in the Kaiper Group, Kaiper Trannsport LLC, transports any desired amount of bulk goods in building construction, civil engineering and road construction as well as ready-mixed concrete and prefabricated parts.",
      content2Desc2: "",
    },
    content3: {
      title: "Your contact person",
      subtitle: "For haulage services",
      team: [
        {
          name: "Jax Larry",
          education: "Master's Civil Engineering",
          position: "Transporation Director",
          phone: "08-8395-6063 + 10",
          email: "jax@kaiper.com",
          image: "/assets/expert/10.jpg",
        },
        {
          name: "Napier Shane",
          education: "Master's Mechanical Engineering",
          position: "Technical Director",
          phone: "08-8395-6063 + 11",
          email: "napier@kaiper.com",
          image: "/assets/expert/11.jpg",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Gravel works",
    content1: {
      img: "/assets/pic4.png",
      content1Title: "Our services",
      content1Advantages: [
        "Gravel extraction",
        "Gravel processing",
        "Earthmoving",
        "Wheel loader",
        "Tipper truck",
        "Wheel excavator",
        "Track excavator",
        "Mining operations",
      ],
    },
    content2: {
      img: "/assets/pic2.png",
      content2Title: "All from a single source",
      content2Desc1:
        "The mining area in Kalgoorlie-Boulder near the company premises and our own sand pit guarantee a large selection of different types of sand and gravel. With its own gravel washing plant and the associated sorting plant, gravel grains and sands are produced for the production of ready-mixed concrete and for the precast concrete industry, as well as filling materials for civil engineering.",
      content2Desc2:
        "Thanks to many years of practice-oriented cooperation with the customer, we offer everything from a single source, from ordering to delivery. Our products are subject to constant internal and external monitoring. Accompanying landscape conservation measures make environmentally friendly dismantling and careful recultivation possible. Rare plant and animal species have already settled in the resulting biotopes.",
    },
    content3: {
      title: "Your contact person",
      subtitle: "For gravel works",
      team: [
        {
          name: "Everly Di",
          education: "Master's Mechanical Engineering",
          position: "Gravel Plant Director",
          phone: "08-8395-6063 + 8",
          email: "everly@kaiper.com",
          image: "/assets/expert/8.jpg",
        },
        {
          name: "Timmy Camron",
          education: "Master's Civil Engineering",
          position: "Gravel Plant Vice-Director",
          phone: "08-8395-6063 + 9",
          email: "timmy@kaiper.com",
          image: "/assets/expert/9.jpg",
        },
      ],
    },
  },
];

function getPostDataById(id) {
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === parseInt(id)) {
      return contents[i];
    }
  }
}

const Services = ({ id }) => {
  const content = getPostDataById(id);

  if (content == undefined) {
    return (
      <Box py={50}>
        <Typography variant="h3" color="textSecondary" align="center">
          404 error
        </Typography>
      </Box>
    );
  }

  return (
    <section>
      <Head>
        <title key="title">Services | Kaiper Construction Group Perth</title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="Take a look at our services! We offer structural and evelope engineering services to a wide array of fields. As a general provider of engineering services, we supply our customers with everything from a single source. We operate in the greater Stuttgart area"
        />
        <meta
          name="keywords"
          content="engineering toronto, engineering structural toronto, toronto envelope engineering, structural engineering gta, mississauga engineering, mississauga engineering services, toronto engineering services"
        />
        <meta
          property="og:title"
          content="Services | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/services"
        />

        <meta
          property="og:description"
          key="og:description"
          content="Take a look at our services! We offer structural and evelope engineering services to a wide array of fields. As a general provider of engineering services, we supply our customers with everything from a single source. We operate in the greater Stuttgart area"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/services" /> */}
      </Head>
      <PageHeader title={content.title} />
      {/* <Content1Alt content={content.content1Alt} /> */}
      <Content1 content={content.content1} />
      <Content2 content={content.content2} />
      <Content3 content={content.content3} />

      <Content6 content={content.content6} />
    </section>
  );
};

export default Services;

Services.getInitialProps = async ({ query }) => {
  const id = query.id;
  return { id };
};
