import React, { useState, useEffect }from 'react';
import { Form, InputGroup, FormControl, Container, Button } from 'react-bootstrap';

export default function CardProduct(props) {
   
    const [product, setProduct] = useState(props.currentProduct);

    const handleProduct = (e) => {
        const id = e.target.getAttribute('id');
        const value = e.target.value;
        let input = { [id]: value};

        setProduct({ ...product, ...input});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitProduct({
            ...product, id: product.id
        })
    }

    return (
    <Container>
        <Form inline className="ms-1" onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                id='name'
                placeholder="Nome"
                aria-label="Username"
                value={product.name || ''}
                onChange={handleProduct}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Preço</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                id='price'
                placeholder="Preço"
                aria-label="price"
                value={product.price || ''}
                onChange={handleProduct}
               />
            </InputGroup>
        </Form>
        <Form inline className="ms-1">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Preço com desconto</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                id='discountedPrice'
                placeholder="Preço com desconto"
                aria-label="discountedPrice"
                value={product.discountedPrice || ''}
                onChange={handleProduct}
               />
            </InputGroup>
        </Form>
        </Container>
    );
}