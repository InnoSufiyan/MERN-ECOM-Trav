import React from 'react'
import { Card, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Rating from './Rating.js'

export default function Product({ product }) {
    return (
        <Card className='my-3 p-3 rounded'>
            <LinkContainer to={`/product/${product?._id}`}>
                <NavLink >
                    <Card.Img src={product?.image} variant="top" />
                </NavLink>
            </LinkContainer>
            <Card.Body>
                <a href={`/product/${product?.id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {product?.name}
                        </strong>
                    </Card.Title>
                </a>
                <Card.Text as='div'>
                    <Rating value={product?.rating} text={`${product?.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as='h3'>
                    ${
                        product?.price
                    }
                </Card.Text>
            </Card.Body>

        </Card>
    )
}
