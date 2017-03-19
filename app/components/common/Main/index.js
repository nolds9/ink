import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const MainContent = (props) => {
  return (
    <main>
      <Grid>
        <Col md={8}>
          Hey
        </Col>
        <Col md={4}>
          Hi
        </Col>
      </Grid>
    </main>
  )
}

export default MainContent
