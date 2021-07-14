import React from "react";
import { Container, Grid, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    transition: "transform 0.4s ease-in-out",
    border: `8px solid ${theme.palette.common.white}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      transform: "scale(1.03)",
    },
    height: "100%",
  },
}));

const ServicesContent1 = ({ currentPiece }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box pt={15}>
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <img
                align="center"
                src={currentPiece.img}
                className={classes.img}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default ServicesContent1;
