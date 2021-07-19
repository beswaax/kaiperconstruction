import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import PrintIcon from "@material-ui/icons/Print";
import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  gridItem: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  footerLink: {
    marginBottom: theme.spacing(2),

    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "none",
    },
  },
  footerLinkalt: {
    color: theme.palette.grey[400],
  },
  footerCopy: {
    borderTop: "1px solid grey",
    borderTopStyle: "solid",
  },
  copy: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  icon: {
    marginRight: "0.3rem",
    color: theme.palette.grey[400],
  },
  icons: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  footer: {
    backgroundColor: theme.palette.nav,
    // backgroundImage: `url("/assets/bg-black.jpg")`,
  },
  title: {
    color: theme.palette.grey[300],
    fontWeight: 600,
  },
  anchor: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const content = {
    brand: { image: "/assets/logo1/vector/default-monochrome.svg", width: 180 },
    copy: "© 2021 Kaiper Construction. All rights reserved.",
    header1: "Links",
    header2: "Services",
    header3: "Contact",
    header4: "Address",
    link1: "About",
    link2: "Team",
    link3: "Services",
    link4: "Careers",
    link5: "Portfolio",
    link6: "Civil Engineering",
    link7: "Gravel works",
    link8: "Concrete works",
    link9: "Precast plant",
    link10: "Haulage services",
    email: "info@kaiper.com",
    fax: "08-8395-6089",
    tel: "08-8395-6063 ",
    address1: "296 Mill Point Rd.",
    address2: "South Perth",
    address3: "WA 6151",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        align="left"
        src={content.brand.image}
        alt=""
        width={content.brand.width}
      />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box
          pt={6}
          pb={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Link align="left" href="/" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" ml="auto" className={classes.footerNav}>
            <Grid
              container
              direction={matchesXS ? "column" : "row"}
              justify={
                matchesXS ? "space-between" : matchesSM ? "center" : "inherit"
              }
              alignItems={
                matchesXS ? "space-between" : matchesSM ? "center" : "inherit"
              }
              spacing={2}
            >
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header1}
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="/about"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link1"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/team"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link2"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/services"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link3"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="career"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link4"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/portfolio"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link5"]}
                  </Link>
                </Box>
              </Grid>{" "}
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header2}
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="/services/1"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link6"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/services/4"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link7"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/services/2"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link8"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="/services/3"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link9"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="/services/5"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link10"]}
                  </Link>
                </Box>
              </Grid>{" "}
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header3}
                  </Typography>
                </Box>
                <Box>
                  <Grid container>
                    <Grid item>
                      <PhoneOutlined className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Link
                        style={{ margin: 0, padding: 0 }}
                        href="tel:+4915901954867"
                        variant="body2"
                        className={classes.footerLink}
                      >
                        {content.tel}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container>
                    <Grid item>
                      <PrintIcon className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Link
                        style={{ margin: 0, padding: 0 }}
                        href="tel:+4915901954867"
                        variant="body2"
                        className={classes.footerLink}
                      >
                        {content.fax}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  {" "}
                  <Grid container>
                    <Grid item>
                      <EmailOutlined className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Link
                        style={{ margin: 0, padding: 0 }}
                        variant="body2"
                        href="mailto:info@kaiper.com"
                        className={classes.footerLink}
                      >
                        {content.email}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>{" "}
              </Grid>{" "}
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header4}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.footerLink}
                  >
                    {content.address1}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.footerLink}
                  >
                    {content.address2}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.footerLink}
                  >
                    {content.address3}
                  </Typography>
                </Box>{" "}
              </Grid>{" "}
            </Grid>
          </Box>
        </Box>
        <Box
          pt={1}
          pb={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.footerCopy}
        >
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
            className={classes.copy}
          >
            {content["copy"]}
          </Typography>
          <Box ml="auto" className={classes.icons}>
            <Typography
              color="textSecondary"
              component="p"
              variant="caption"
              gutterBottom={false}
              className={classes.copy}
            >
              Made with love by{" "}
              <a
                href="https://rangojango.com/"
                target="_blank"
                className={classes.anchor}
              >
                Rangojango
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
