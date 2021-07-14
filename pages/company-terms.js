import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@material-ui/core";
import Link from "../src/Link";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  button: {},
  cardRoot: {
    backgroundColor: theme.palette.secondary.main,
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  cardRoot2: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    boxShadow: "#0f0f0f",
    border: "1px solid lightgray",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
  button: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const CompanyTerms = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const basicContent = {
    title: "TERMS OF USE",
    subtitle: "Last updated on 07.07.2021",
    buttons: {
      firstButton: "REFER A FRIEND",
      secondButton: "APPLY NOW",
    },
    firstCard: {
      title: "Do you have a question?",
      text: "Not sure what you are looking for or just want some clarification? We would be happy to speak to you and clarify that for you. At any time!",
      button: "CONTACT US",
    },
  };

  const content = [
    {
      title: "Summary",
      text: "Please note the following provisions for the use of our offers and our data protection declaration. By using the information, services and programs offered on our website, the user declares his consent to the terms of use formulated here.",
    },
    {
      title: "Liability",
      text: "Lewis & Company is only liable for damage if Lewis & Company or one of its vicarious agents has violated an essential contractual obligation in a manner that endangers the purpose of the contract or if the damage was caused by gross negligence or intent on the part of Lewis & Company or one of its vicarious agents is due. Lewis & Company's liability for damage to life, limb or health, as well as for guarantees, remains unaffected.",
    },
    {
      title: "Privacy Policy",
      text: "The protection of your data is an important issue for Lewis & Company. Our offer is designed in accordance with the statutory provisions for data protection. Details on our data protection policy can be found in our data protection declaration.",
    },
    {
      title: "Links",
      text: "This website contains designated links to other sites over which Lewis & Company has no influence and for the content and design of which it bears no responsibility and assumes no liability. The inclusion of a link also does not mean any identification with the content shown on the linked page and no “making your content your own”. All links that open a new window are links to third-party providers.",
    },
    {
      title: "Information on our website",
      text: "The Lewis & Company website is subject to regular changes and additions to update the information provided. Lewis & Company therefore assumes no liability or guarantee for the topicality, correctness, completeness and availability of the information presented. The information and data presented here serve the user for informational purposes and for personal use only. Lewis & Company assumes no liability for direct or indirect damage, including lost profit, from the use of the information offered on these pages. In any case, Lewis & Company is only liable in the event of willful or grossly negligent behavior and in cases of mandatory statutory provisions.",
    },
    {
      title: "Copyright",
      text: "The content of this website is protected by copyright. The storage of the content is only permitted for private purposes. Commercial use for further publication or free distribution may only take place in consultation with Lewis & Company.",
    },
  ];

  return (
    <div>
      <Head>
        <title key="title">
          Company Terms | Kaiper Construction Group Perth
        </title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="Sieh dir unsere Nutzungsbedingungen an! Wir bieten Bauleitung, Bauberatung, Architektur und vieles mehr an. Als allgemeiner Anbieter von Bauleistungen beliefern wir unsere Kunden mit allem aus einer Hand. Wir sind im Großraum Stuttgart tätig."
        />
        <meta
          name="keywords"
          content="bauunternehmen stuttgart, leistungen stuttgart bauunternehmen, leistungen bauleitung stuttgart, leistungen stuttgart bauen, bauen stuttgart, stuttgart bauleitung, stuttgart bauberatung, architektur Stuttgart, Baden-Würtemmberg bauunternehmen, bauen bawü, bawü bauleitung"
        />
        <meta
          property="og:title"
          content="Nutzungsbedingungen | Fluvis Bauunternehmen Stuttgart"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="fluvis.eu/services" />

        <meta
          property="og:description"
          key="og:description"
          content="Sieh dir unsere Nutzungsbedingungen an! Wir bieten Bauleitung, Bauberatung, Architektur und vieles mehr an. Als allgemeiner Anbieter von Bauleistungen beliefern wir unsere Kunden mit allem aus einer Hand. Wir sind im Großraum Stuttgart tätig."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/services" /> */}
      </Head>
      <Container maxWidth="lg">
        <Box pb={10} pt={4}>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Box my={3} spacing={5}>
                <Typography className={classes.title} variant="h5">
                  {basicContent.title}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  {basicContent.subtitle}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box my={2}>
            <Grid container style={{ backgroundColor: "lightgray" }}>
              <Typography style={{ padding: 0.7 }}></Typography>
            </Grid>
          </Box>

          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            justify="space-between"
          >
            <Grid item sm={12} md={7}>
              {content.map((a) => {
                return (
                  <Box my={2} key={a.title}>
                    <Typography className={classes.title} variant="h4">
                      {a.title}
                    </Typography>
                    <Typography color="textPrimary">{a.text}</Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item sm={12} md={4}>
              <Box my={4}>
                <Card className={classes.cardRoot}>
                  <CardContent>
                    <Typography
                      style={{ color: "#FFFFFF" }}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      {basicContent.firstCard.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#F7F7F7" }}
                    >
                      {basicContent.firstCard.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={Link}
                      className={classes.button}
                      disableRipple
                      disableFocusRipple
                      color="primary"
                      variant="outlined"
                      href="/about"
                    >
                      {basicContent.firstCard.button}
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CompanyTerms;
