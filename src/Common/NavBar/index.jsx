import Nav from 'react-bootstrap/Nav';
import img from '../imgs/Vector.png'

const BarNav = () => {
    return (
        <div className='ContNav'>
            <img src={img} alt="Bars" className='bars'/>
            <Nav className="navBar">
                <Nav.Link href="#sobre-mi" className='navLink'>Sobre mi</Nav.Link>
                <Nav.Link href="#proyectos" className='navLink'>Experiencias</Nav.Link>
                <Nav.Link href="#habilidades" className='navLink'>Habilidades</Nav.Link>
                <Nav.Link href="#certificados" className='navLink'>Certificados</Nav.Link>
            </Nav>
        </div>     
    );
}

export { BarNav } 