import React, { PropTypes } from 'react'
import {Col } from 'react-bootstrap'
import styles from './styles'

const PrimaryFooter = (props) => {
  return (
    <footer className='primary-footer' style={styles.footer}>
      <Col mdOffset={10}>
        Made with love
      </Col>
    </footer>
  )
}

export default PrimaryFooter
