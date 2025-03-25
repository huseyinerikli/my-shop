import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchProducts } from '../features/productSlice';
import { fetchCategories } from '../features/categorySlice';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading: productsLoading } = useSelector((state) => state.products);
  const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const featuredProducts = products.slice(0, 4);

  return (
    <Container>
      {/* Hero Section */}
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4">Welcome to My Shop</h1>
          <p className="lead">Discover amazing products at great prices</p>
          <Button as={Link} to="/products" variant="primary" size="lg">
            Shop Now
          </Button>
        </Col>
      </Row>

      {/* Featured Products */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Featured Products</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        {productsLoading ? (
          <Col>Loading...</Col>
        ) : (
          featuredProducts.map((product) => (
            <Col key={product.id} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button as={Link} to={`/products/${product.id}`} variant="primary">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Categories */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Shop by Category</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        {categoriesLoading ? (
          <Col>Loading...</Col>
        ) : (
          categories.map((category) => (
            <Col key={category.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Button as={Link} to={`/categories/${category.id}`} variant="outline-primary">
                    Browse {category.name}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Features */}
      <Row className="mb-5">
        <Col md={4} className="text-center">
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Secure Payment</h3>
          <p>100% secure payment</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>24/7 Support</h3>
          <p>Dedicated support</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home; 