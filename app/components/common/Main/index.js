import React, { PropTypes } from 'react';
import { Grid, Col } from 'react-bootstrap';

const MainContent = ({ children }) => (
  <main>
    <Grid>
      <Col md={12}>
        { React.Children.toArray(children) }
      </Col>
    </Grid>
  </main>
);

MainContent.propTypes = {
  children: PropTypes.any,
};

export default MainContent;
