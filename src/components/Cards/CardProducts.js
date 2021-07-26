import React from 'react';
import { Form, InputGroup, FormControl, Container, Button } from 'react-bootstrap';

export default function CardProduct() {
    const customer = {
        name: '',
        email: '',
        birthday: '',
        street: '',
        number: '',
        district: '',
        city: '',
        postal: '',
        state: '',
        country: ''
    }

    return (
    <Container>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Nome"
                aria-label="Username"
                value={customer.name}
               />
            </InputGroup>
        </Form>

        </Container>
    );
}