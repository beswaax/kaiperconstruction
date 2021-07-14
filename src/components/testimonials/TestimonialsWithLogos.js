import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "../../Link";
import { useMediaQuery, useTheme, Button } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  logo: {
    height: 100,
    marginTop: "auto",
    marginBottom: "auto",
  },
  paper: {
    maxHeight: 128,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.grey[50],
    border: 0,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  button: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Testimonials(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "You can rely on Bonnarigo CPA",
    description:
      "Our compliance packages are a fixed fee (depending on your size and needs) and billed monthly.",
    logo1: "/assets/logo2.png",
    logo2: "/assets/logo3.png",
    logo3: "/assets/logo1.png",
    button1: "Contact Us",
    button2: "Learn More",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={5}>
          <Grid direction={matchesSM ? "column" : "row"} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box mt={5} align={matchesSM ? "center" : "inherit"}>
                <Typography variant="h4" component="h3" gutterBottom={true}>
                  <Typography
                    color="primary"
                    variant="h4"
                    className={classes.title}
                    component="span"
                  >
                    {content["header-p1"]}
                  </Typography>
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  paragraph={true}
                  className={classes.decription}
                >
                  {content["description"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                <Box pt={matchesSM ? 0 : 10} px={1} pb={matchesSM ? 3 : 0}>
                  <Button
                    disableRipple
                    disableTouchRipple
                    variant="contained"
                    component={Link}
                    className={classes.button}
                    href="/contact"
                    color="primary"
                  >
                    {content.button1}
                  </Button>
                </Box>

                <Box pt={matchesSM ? 0 : 10} pb={matchesSM ? 3 : 0}>
                  <Button
                    disableRipple
                    disableTouchRipple
                    href="/career"
                    component={Link}
                    className={classes.button}
                    variant="outlined"
                    color="textSecondary"
                  >
                    {content.button2}
                  </Button>
                </Box>
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                <Box pt={matchesSM ? 0 : 11} pb={matchesSM ? 3 : 0}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Image
                      src={content["logo1"]}
                      width={140}
                      height={32}
                      alt="first company logo that we worked with"
                    />
                  </Paper>
                </Box>
                <Box pt={matchesSM ? 0 : 11} pb={matchesSM ? 3 : 0}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Image
                      src={content["logo3"]}
                      width={50}
                      height={70}
                      alt="third company logo that we worked with"
                    />
                  </Paper>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
