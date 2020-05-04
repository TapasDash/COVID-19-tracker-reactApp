import React, { Component } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
//we are using classnames ext module so that we can use multiple classes bind through cx
import cx from "classnames";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

//fucntional component
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //destruct from props Obj

  if (!confirmed) {
    return "Loading...";
    //we have used this coz when we are try to render the data of api.its hasn't really
    //fetched the data yet ..thats why it was showing error in confirmed.value..coz it is undefined i.e value
    //wasn't fetched yet
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* here below (xtra small) xs=12 means that in mobile devices this card will take 12 grids
        but for medium deices i.e desktop md=3..card will take 3 grids */}
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            {/* typography material ui is more sophisticated way to represent your texts, paragraphs etc*/}
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
              {/* we have made a new Date Obj and gonna convert it to string to
              make it in human readable form */}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
              {/* we have made a new Date Obj and gonna convert it to string to
              make it in human readable form */}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
              {/* we have made a new Date Obj and gonna convert it to string to
              make it in human readable form */}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

//<Typographhy> here is used for texts display ..its just more styled than usual heaiding or paragraphs
