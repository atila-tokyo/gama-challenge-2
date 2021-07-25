import logo from '../../assets/pae.png'
import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function NavbarDark() {

    return (
        <Navbar bg='dark' variant='light'>
            <img alt='' className='ms-4' src={logo} />
            <Container>
            <h3 className="text-center text-white mb-0 me-0 ms-5"> Todas as soluções para seu negócio no campo, você encontra em um lugar só</h3>
            </Container>
        </Navbar>
    )
}