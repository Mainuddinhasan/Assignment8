import React from "react";
import { Paper, Typography, Grid, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Comments = (props) => {
  const { name, body } = props.comment;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={classes.avatar}>
              <Avatar
                src={`https://loremflickr.com/600/400?random=${
                  Math.random() * 10
                }`}
                style={{ width: "80px", height: "80px" }}
              />
              <Typography variant="caption">{name}</Typography>
            </div>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                
                <Typography variant="body2" gutterBottom>
                  {body}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Comments;







