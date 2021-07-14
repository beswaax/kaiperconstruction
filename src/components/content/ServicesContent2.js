import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 500,
  },

  text: {
    fontWeight: 400,
    color: theme.palette.common.white,
  },
}));

const ServicesContent1 = ({ currentPiece }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box py={10}>
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="center"
          >
            <Box pb={5}>
              <Grid item>
                <Typography
                  variant="h3"
                  align="left"
                  component="h4"
                  color="primary"
                  className={classes.title}
                >
                  {currentPiece.title}
                </Typography>
              </Grid>
            </Box>
            <Grid item>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  {currentPiece.attributes.map((att) => (
                    <Box borderRight={1}>
                      <Box borderBottom={0.4} padding={1}>
                        <Typography
                          align="left"
                          variant="h6"
                          align="left"
                          component="h6"
                          color="primary"
                          className={classes.text}
                        >
                          {att.title}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  {currentPiece.attributes.map((att) => (
                    <Box>
                      <Box borderBottom={0.4} pl={1} padding={1}>
                        <Typography
                          align="left"
                          variant="h6"
                          align="left"
                          component="h6"
                          color="primary"
                          className={classes.text}
                        >
                          {att.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default ServicesContent1;
