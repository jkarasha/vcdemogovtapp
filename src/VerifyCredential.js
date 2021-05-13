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

export default function VerifyCredential() {
  
  const classes = useStyles();

  const [ verified, setVerified ] = useState(false);

  useEffect(() => {
    window.addEventListener("message", function(event) {
      if (event.origin == 'https://vcdemoapp.azurewebsites.net') {
        if (event.data.status == 2) {
          setVerified(true);
        }
        return;
      }
    });
  })

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
                  Validate your Employment Status!
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
                  In order for us to issue your company's tax exempt credential, please verify your
              current employment status with Duwamish corporation.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <iframe
                    id="verifyEmployeeCredential"
                    name="verifyEmployeeCredential"
                    src="https://vcdemoapp.azurewebsites.net/EmploymentVerifier.html"
                    align="center"
                    width="100%"
                    height="400"
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
                  href="/issuer"
                  disabled={!verified}>
                  Get Tax-Exempt Credential
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
}