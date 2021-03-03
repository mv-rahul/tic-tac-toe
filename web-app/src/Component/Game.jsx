import React, { useState } from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Game = () => {
  const [gameData, setGameData] = useState([]);
  const [click, setClick] = useState(undefined);
  const [result, setResult] = useState(null);
  const classes = useStyles();
  const onClickCell = (index) => {
    if (gameData[index] === undefined) {
      let temp = gameData;
      if (click === undefined) {
        temp[index] = "X";
        setClick(1);
      } else if (click % 2 === 0) {
        temp[index] = "X";
        setClick(click + 1);
      } else {
        temp[index] = "O";
        setClick(click + 1);
      }

      if (temp[0] !== undefined && temp[0] === temp[1] && temp[0] === temp[2]) {
        setResult(`${temp[0]} wins`);
      } else if (
        temp[0] !== undefined &&
        temp[0] === temp[3] &&
        temp[0] === temp[6]
      ) {
        setResult(`${temp[0]} wins`);
      } else if (
        temp[0] !== undefined &&
        temp[0] === temp[4] &&
        temp[0] === temp[8]
      ) {
        setResult(`${temp[0]} wins`);
      } else if (
        temp[1] !== undefined &&
        temp[1] === temp[4] &&
        temp[1] === temp[7]
      ) {
        setResult(`${temp[1]} wins`);
      } else if (
        temp[2] !== undefined &&
        temp[2] === temp[5] &&
        temp[2] === temp[8]
      ) {
        setResult(`${temp[2]} wins`);
      } else if (
        temp[2] !== undefined &&
        temp[2] === temp[4] &&
        temp[2] === temp[6]
      ) {
        setResult(`${temp[2]} wins`);
      } else if (
        temp[3] !== undefined &&
        temp[3] === temp[4] &&
        temp[3] === temp[5]
      ) {
        setResult(`${temp[3]} wins`);
      } else if (
        temp[6] !== undefined &&
        temp[6] === temp[7] &&
        temp[6] === temp[8]
      ) {
        setResult(`${temp[6]} wins`);
      } else {
        if (
          temp[0] !== undefined &&
          temp[1] !== undefined &&
          temp[2] !== undefined &&
          temp[3] !== undefined &&
          temp[4] !== undefined &&
          temp[5] !== undefined &&
          temp[6] !== undefined &&
          temp[7] !== undefined &&
          temp[8] !== undefined
        ) {
          setResult("Ends in a draw");
        }
      }
      setGameData(temp);
    } else {
    }
  };

  const onClickReset = () => {
    setClick(undefined);
    setGameData([]);
    setResult(null);
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ paddingTop: "15em" }}
    >
      <Grid item xs>
        <Grid container direction="row">
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(0)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[0] ? gameData[0] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(1)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[1] ? gameData[1] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(2)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[2] ? gameData[2] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Grid container direction="row">
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(3)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[3] ? gameData[3] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(4)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[4] ? gameData[4] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(5)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[5] ? gameData[5] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Grid container direction="row">
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(6)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[6] ? gameData[6] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(7)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[7] ? gameData[7] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} onClick={() => onClickCell(8)}>
              <Typography className={classes.text} variant="h3">
                {click ? (gameData[8] ? gameData[8] : "-") : "-"}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs style={{ paddingTop: "5em" }}>
        <Button variant="contained" color="primary" onClick={onClickReset}>
          Reset
        </Button>
      </Grid>
      {result ? (
        <Grid item style={{ paddingTop: "3em" }}>
          <Typography variant="h3">{result}</Typography>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    width: "10em",
  },
}));
