import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';

export default function CardHome() {
    return (
        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title> Cadastrar Cliente</Card.Title>
                    <Button></Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title> Cadastrar Produto</Card.Title>
                    <Button></Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );

}