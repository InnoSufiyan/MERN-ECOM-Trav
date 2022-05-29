import React, { useEffect, useState } from 'react'
import { Col, Image, ListGroup, Row, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { addToCart } from '../redux/actions/cartActions'


export default function CartScreen() {
  const [searchParams] = useSearchParams()
  const params = useParams()
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const { cartItems } = cart

  console.log(params.id)

  const qty = searchParams.get('qty')

  useEffect(() => {
    console.log(cartItems?.length)
    if (params.id) {
      console.log("if working")
      dispatch(addToCart(params.id, qty))
    }
  }, [dispatch, params.id, qty])

  const removeFromCartHandler = (id) => {
    console.log("remove")

  }


  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {
          cartItems?.length === 0 ? (
            <>
              <h2> Your Cart is empty.. </h2>
              <Link to='/'>Let's Buy something</Link>
            </>
          ) : (
            <ListGroup variant='flush'>
              {
                cartItems.map(item => (
                  <ListGroup.Item key={item?.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item?.image} alt={item?.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item?.name}</Link>
                      </Col>
                      <Col md={2}>
                        ${item?.price}
                      </Col>
                      <Col md={2}>
                        <Form.Control as='select' value={item?.qty} onChange={(e) => dispatch(addToCart(item?.product, Number(e.target.value)))}>
                          {
                            [...Array(item.countInStock).keys()].map(x => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))
                          }

                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button type='button' variant='light' onClick={() => removeFromCartHandler(item?.product)}>
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          )
        }
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal () items</h2>
            </ListGroup.Item>
          </ListGroup>
        </Card>

      </Col>
    </Row>
  )
}
