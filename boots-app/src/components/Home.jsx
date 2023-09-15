import React from 'react';
import {Container , Card , Row , Col} from 'react-bootstrap';



const Home = ({boots}) => {
    return(
        <Container>
            <h2> Svailable Boots </h2>
            <Row>
                {boots.map((boot) => (
                    <Col key = {boot.id} xs={12} sm={6} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title> {boot.name} </Card.Title>
                                <Card.Text> Size : {boot.size} </Card.Text>
                                <Card.Text> Color : {boot.color}  </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};


export default Home;