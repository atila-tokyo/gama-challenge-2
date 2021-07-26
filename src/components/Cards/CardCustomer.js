import React, { useState, useEffect } from 'react';
import { Form, InputGroup, FormControl, Container, Button } from 'react-bootstrap';

export default function CardProduct(props) {
    const [ customer, setCustomer ] = useState(props.currentCustomer);

    const [ address, setAddress ] = useState(props.currentCustomer.address);
    
    const handleCustomer = (e) => {
        const id = e.target.getAttribute('id');
        const value = e.target.value;
        let input = { [id]: value, };

        setCustomer({ ...customer, ...input });
    };

    const handleAddress = (e) => {
        const id = e.target.getAttribute('id');
        const value = e.target.value;
        let input = { [id]: value };

        setAddress({ ...address, ...input});
    };



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
                onChange={handleCustomer}
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
                onChange={handleCustomer}
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
                onChange={handleAddress}
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
                onChange={handleAddress}
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
                onChange={handleAddress}
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
                onChange={handleAddress}
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
                onChange={handleAddress}
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
                onChange={handleAddress}
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
                onChange={handleAddress}
               />
            </InputGroup>
        </Form>
        </Container>
    );
}