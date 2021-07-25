import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from '../../components/Navbar';
import CardHome from '../../components/Cards/CardHome';

function App(props) {
    return (
        <>
        <NavbarDark />
        <CardHome />
        </>
    )
}

export default App;