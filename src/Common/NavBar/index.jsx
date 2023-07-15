import Nav from 'react-bootstrap/Nav';
const BarNav = () => {
    return (
        <>
            <Nav className="justify-content-center text-center flex-grow-1 pe-3 navBar">
                <Nav.Link href="#sobre-mi" className='navLink'>sobre mi</Nav.Link>
                <Nav.Link href="#habilidades" className='navLink'>habilidades</Nav.Link>
                <Nav.Link href="#proyectos" className='navLink'>proyectos</Nav.Link>
                <Nav.Link href="#certificados" className='navLink'>certificados</Nav.Link>
            </Nav>
        </>     
    );
}

export { BarNav } 