import React from 'react';
import {connect} from 'react-redux';
import { Container ,Button , Card ,  Row , Col } from 'react-bootstrap';
import { addToCart , removeFromCart , increaseQuantity , decreaseQuantity } from '../actions/CartAction';


const Cart = ({boots , addToCart , removeFromCart , increaseQuantity , decreaseQuantity}) => {
    console.log("Cart Component")

    return(
        <Container style={{marginTop:"30px"}}>
            <h2> Cart Items </h2>
            <Row style={{marginTop:"60px"}}>
                {boots.map((boot) => (
                    <Col key={boot.id} xs={12} sm={6} md={4}>
                        <Card>
                           <Card.Body>
                                 <Card.Title> {boot.name} </Card.Title>
                                 <Card.Text> Size : {boot.size} </Card.Text>
                                 <Card.Text> Color : {boot.color}  </Card.Text>
                                 <Button  onClick={() => removeFromCart(boot.id)}> Remove from cart </Button>
                                 <Button style={{marginLeft:"10px"}} onClick={() => increaseQuantity(boot.id)}> + </Button>
                                 <Button style={{marginLeft:"10px"}} onClick={() => decreaseQuantity(boot.id)}> - </Button>
                           </Card.Body>
                       </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


const mapStateToProps = (state) => ({
    boots : state.cart.items,
});


const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps , mapDispatchToProps)(Cart);