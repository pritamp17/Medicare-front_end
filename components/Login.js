// import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Form,Button, Card } from 'react-bootstrap';
import styled from 'styled-components'; 

function Login(props) {
    return (
        <>
        <div>

        <Card style={{ width: '20rem' }}  bg="light" border="dark" text="dark">
         <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{props.type}'s Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card.Body>
            <Button variant="link" size="sm" href={props.signUpLink} >New Account Register Here!</Button>
            </Card>
        </div>
        
        </>
    )
}
export default Login



 const wrapper = styled.section`

`;

