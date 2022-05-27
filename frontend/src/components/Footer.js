import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Proshop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
