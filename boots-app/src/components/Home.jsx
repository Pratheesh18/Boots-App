import React from 'react';
import {Container , Card , Row , Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Home = ({boots , onAddToCart}) => {
    const navigate = useNavigate();

    const handleAddToCart = (bootId) => {
        onAddToCart(bootId);
        navigate('/cart')
    }


    return(
        <Container style={{marginTop:"30px"}}>
            <h2> Available Boots </h2>
            <Row style={{marginTop:"60px"}}>
                {boots.map((boot) => (
                    <Col key = {boot.id} xs={12} sm={6} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title> {boot.name} </Card.Title>
                                <Card.Text> Size : {boot.size} </Card.Text>
                                <Card.Text> Color : {boot.color}  </Card.Text>
                                <Button onClick={() => handleAddToCart(boot.id)}> Add To Cart </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};


export default Home;