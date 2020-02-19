import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Game from "./Game";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: "center"
  },
  toolbar: theme.mixins.toolbar
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Game />
      </main>
    </div>
  );
}
