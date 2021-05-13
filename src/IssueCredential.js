import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
//
import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function IssueCredential() {
  
  const classes = useStyles();

  const [ credIssued, setCredIssued ] = useState(false);

  useEffect(() => {
    window.addEventListener("message", function(event) {
      if (event.origin == 'https://vcdemoapp.azurewebsites.net') {
        if (event.data.status == 2) {
          setCredIssued(true);
        }
        return;
      }
    });
  });

  return (
    <div className={classes.root}>
      <Nav/>
      <main className={classes.content}>
        <Toolbar />
        <div className={classes.heroContent}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                  Step 2: Get Tax-Exempt Credential
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    align="left"
                    paragraph
                  >
                  Get your tax-exempt credential below...
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <iframe
                    src="https://vcdemoapp.azurewebsites.net/GovernmentIssuer.html"
                    align="center"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  variant="contained"
                  href="/"
                  >
                  Home
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
}