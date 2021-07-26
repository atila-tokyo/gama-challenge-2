import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from '../../components/Navbar';
import CardCustomer from '../../components/Cards/CardCustomer';


function App(props) {
    return (
        <>
        <NavbarDark />
        <CardCustomer />
        </>
    )
}

export default App;