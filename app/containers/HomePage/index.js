/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { NavBar, Main, Footer } from '../../components/common'
import { Grid, Row } from 'react-bootstrap'
import styles from './styles'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='home-page-container'>
        <Grid style={styles.container}>
          <Row className='home-nav'>
            <NavBar />
          </Row>
          <Row className='home-content'>
            <Main />
          </Row>
          <Row className='home-footer'>
            <Footer />
          </Row>
        </Grid>
      </div>
    );
  }
}
