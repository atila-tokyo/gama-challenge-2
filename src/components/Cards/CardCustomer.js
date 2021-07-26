import React from 'react';
import { Form, InputGroup, FormControl, Container, Button } from 'react-bootstrap';

export default function CardProduct() {
    const customer = {
        name: '',
        email: '',
        cpf: '',
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
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="@"
                aria-label="Email"
                value={customer.email}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">CPF</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="cpf"
                aria-label="Email"
                value={customer.cpf}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Rua</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Rua"
                aria-label="street"
                value={customer.street}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Número</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="N."
                aria-label="number"
                value={customer.number}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Bairro</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Bairro"
                aria-label="district"
                value={customer.district}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Cidade</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Cidade"
                aria-label="city"
                value={customer.city}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">CEP</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="CEP"
                aria-label="postal"
                value={customer.postal}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Estado</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Estado"
                aria-label="state"
                value={customer.state}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">País</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="País"
                aria-label="country"
                value={customer.country}
               />
            </InputGroup>
        </Form>
        </Container>
    );
}