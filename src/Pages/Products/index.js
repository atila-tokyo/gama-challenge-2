import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from '../../components/Navbar';
import CardProduct from '../../components/Cards/CardProducts';


function App(props) {
    return (
        <>
        <NavbarDark />
        <CardProduct />
        </>
    )
}

export default App;