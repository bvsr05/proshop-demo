import { useEffect, useState } from 'react';
import axios from 'axios';
import { addToCart } from '../slices/cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
//import products from '../products';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import {  Row, Col, Image, ListGroup, Card, Button, Form, } from 'react-bootstrap';
import Rating from '../components/Rating';

{/*

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetProductDetailsQuery, useCreateReviewMutation,} from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';

*/}

const ProductScreen = () => {
    const { id: productId } = useParams();
    const [qty, setQty] = useState(1);
      
    
    const [product, setProduct] = useState({});

    useEffect( () => {  

        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${productId}`);
            setProduct(data);
            }
            fetchProduct();
    }, [productId] );

    return(
        <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                    <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                    </ListGroup.Item>

                    <ListGroup.Item> Price: ${product.price} </ListGroup.Item>
                    <ListGroup.Item> Description: {product.description} </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                        <Col>Status:</Col>
                        <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                        </Col>
                        </Row>
                    </ListGroup.Item>

                    {/* Qty Select */}
                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                            <Form.Control
                                as='select'
                                value={qty}
                                onChange={(e) => setQty(Number(e.target.value))}
                            >
                                {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                    <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                    </option>
                                )
                                )}
                            </Form.Control>
                            </Col>
                        </Row>
                        </ListGroup.Item>
                    )}

                    <ListGroup.Item>
                        <Button
                        className='btn-block'
                        type='button'
                        disabled={product.countInStock === 0}
                        >
                        {/*  Please move this code to button body above  onClick={addToCartHandler}  */}
                        Add To Cart
                        </Button>
                    </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row> 
        </>
    );

};

export default ProductScreen;