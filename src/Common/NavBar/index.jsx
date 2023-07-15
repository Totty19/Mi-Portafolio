import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const BarNav = () => {
    return (
        <>
            {['md',].map((expand) => (
                <Navbar key={expand} expand={expand}>
                    <Container fluid className="contExpand">
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} className='navBarExpand' placement="end">
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3 navBar">
                                    <Nav.Link href="#sobre-mi" className='navLink'>sobre mi</Nav.Link>
                                    <Nav.Link href="#habilidades" className='navLink'>habilidades</Nav.Link>
                                    <Nav.Link href="#proyectos" className='navLink'>proyectos</Nav.Link>
                                    <Nav.Link href="#certificados" className='navLink'>certificados</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        ))}
    </>     
    );
}

export { BarNav } 