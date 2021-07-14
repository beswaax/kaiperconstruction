import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  title: {
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
}));

export default function Certificates({ bg }) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "Certificates and qualifications",
    description:
      "In addition to our inclusion in the list of prequalified companies at the Association for the Prequalification of Construction Companies, we are also a sponsoring member of the Association for Quality in Construction.",
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section style={{ backgroundColor: bg }}>
      <Box>
        <Box py={8}>
          <Container maxWidth="md" data-aos="fade-up">
            <Box pt={5} pb={5}>
              <Grid container spacing={matchesSM ? 2 : 4}>
                <Grid item xs={12} md={6}>
                  <Box display="flex" height="100%">
                    <Box my="auto">
                      <Typography variant="h3" component="h3">
                        <Typography
                          className={classes.title}
                          variant="h3"
                          component="span"
                        >
                          {content["header-p1"]}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-up">
                  <Box pt={matchesSM ? 1 : 1}>
                    <Typography variant="subtitle1" color="textSecondary">
                      <Typography variant="subtitle1" color="textSecondary">
                        {content["description"]}
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item align="center" xs={12} data-aos="fade-up">
                  <Box pt={matchesSM ? 5 : 8}>
                    <Image
                      src="/assets/certificates.png"
                      width={300}
                      height={110}
                      quality={100}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </section>
  );
}
