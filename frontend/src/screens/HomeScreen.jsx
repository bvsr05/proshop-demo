import { Row, Col } from 'react-bootstrap';


//import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
//import { Link } from 'react-router-dom';
import Product from '../components/Product';
//import Loader from '../components/Loader';
//import Message from '../components/Message';
//import Paginate from '../components/Paginate';
//import ProductCarousel from '../components/ProductCarousel';
//import Meta from '../components/Meta';

const HomeScreen = () => {
    const { data, isLoading, error } = useGetProductsQuery();

    return (
        <>
            {isLoading ? ( <h2> Loading... </h2> 
            ) : error ? ( <div> { error?.data?.message || error.error } </div> ) : 
            ( <>                 
                <h1> Latest Products </h1>
                <Row>
                    {
                        data.products.map( 
                            (product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}> 
                                    <Product product={product} />
                                    
                                </Col>
                            )
                          )
                    }
                </Row>
                </>
            ) 
            }
        </>
    );
};

export default HomeScreen;