import React , {useState} from 'react';
import {Container , Form , Button} from 'react-bootstrap';


const Register = ({onRegsiter}) => {
    const [formData , setFormData] = useState({username : '', password : ''});

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({...formData , [name] : value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegsiter(formData);
    };


    return(
        <Container>
            <h2> Registration </h2>
            <Form onSubmit={handleSubmit}>
                 <Form.Group>
                    <Form.Label> Username </Form.Label>
                    <Form.Control
                          type="text"
                          name ="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                    />
                 </Form.Group>
                 <Form.Group>
                    <Form.Label> Passoword</Form.Label>
                    <Form.Control 
                         type='password'
                         name = 'password'
                         value = {formData.password}
                         onChange = {handleChange}
                         required
                    />
                 </Form.Group>
                 <Button type='submit' > Register </Button>
            </Form>
        </Container>
    )
};

export default Register;