import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import {getPosts} from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import usestyles from "./styles";

import seminarPreview from './images/facelift-main-banner.jpg';

const App = () => {
  const classes = usestyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return(
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3">Facelift Massage</Typography>
      </AppBar>
      <img className={classes.image} src={seminarPreview} alt="seminar-preview" />
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  )
}

export default App