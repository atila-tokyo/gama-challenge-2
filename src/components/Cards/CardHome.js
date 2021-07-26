import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import implementos from '../../assets/implementos.jpeg';
import sementes from '../../assets/sementes.jpeg'
import epi from '../../assets/epi.jpeg';
import consultoria from '../../assets/consultoria.jpeg';
import { useHistory } from 'react-router-dom';

export default function CardHome() {
    const history = useHistory();

    const customerHandle = () => {
        setTimeout(() => {
            history.push('/customer')
        }, 1000)
    };

    const productHandle = () => {
        setTimeout(() => {
            history.push('/products')
        }, 1000)
    };
    
    return (
        <>
        <CardGroup className="text-center">
            <Card>
                <Card.Body>
                    <Card.Title> Implementos Agrícolas</Card.Title>
                    <Card.Img style={{ width: '13rem'}} src={implementos}></Card.Img>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title> Sementes</Card.Title>
                    <Card.Img style={{ width: '13rem'}} src={sementes}></Card.Img>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title> Equipamentos de Proteção</Card.Title>
                    <Card.Img style={{ width: '13rem'}} src={epi}></Card.Img>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title> Consultoria Técnica</Card.Title>
                    <Card.Img style={{ width: '13rem'}} src={consultoria}></Card.Img>
                </Card.Body>
            </Card>

        </CardGroup>
        <CardGroup className="text-center">
            <Card>
                <Card.Body>
                    <Card.Title> Cadastrar Cliente</Card.Title>
                    <Button type="button" onClick={customerHandle}>Cadastre</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title> Cadastrar Produto</Card.Title>
                    <Button type="button" onClick={productHandle}>Cadastre</Button>
                </Card.Body>
            </Card>
        </CardGroup>
        </>
    );

}