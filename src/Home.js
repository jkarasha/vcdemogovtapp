import React from 'react';
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

export default function Home() {
  
  const classes = useStyles();

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
                    Is your company tax-exempt?
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
                  We are now able to validate your company's tax exempt status. In order for us to 
                  issue you with the right credential, we have to validate your current employment status.
                  <br/><br/>
                  Once confirmed, if your company has met the requirements for tax-exemption, we'll issue a credential.
                  </Typography>
                  <br/><br/>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  variant="contained"
                  href="/verifier" >Verify Employment
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
}