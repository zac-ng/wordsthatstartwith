import React from "react";
import Grid from "@material-ui/core/Grid";

const data = [1, 2, 3, 4];
const info = [];

function SplitRows() {
  for (var x = 0; x < data.length; x += 3) {
    if (x + 3 > data.length) info.push(data.slice(x, data.length));
    else info.push([data[x], data[x + 1], data[x + 2]]);
  }
}

function FormRow() {
  return (
    <React.Fragment>
      {/* <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid> */}
    </React.Fragment>
  );
}

const MyGrid = () => {
  return <div>Hello</div>;
};

export default function grid2() {
  return <MyGrid />;
}