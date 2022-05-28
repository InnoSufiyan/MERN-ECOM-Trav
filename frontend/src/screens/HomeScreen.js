import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import { listProducts } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'

export default function HomeScreen() {
    const dispatch = useDispatch()
    const productsList = useSelector((state) => state?.productList)
    const { loading, products } = productsList

    useEffect(() => {
        dispatch(listProducts())
    }, [])


    return (
        <>
            <h1>Latest Products</h1>
            {
                loading ? (
                    <Loader />
                ) : (
                    <Row>
                        {
                            products?.map((product => (
                                <Col key={product?._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            )))
                        }
                    </Row>
                )
            }
        </>
    )
}
