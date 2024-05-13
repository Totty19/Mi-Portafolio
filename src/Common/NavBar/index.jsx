import Nav from 'react-bootstrap/Nav';
import img from '../imgs/Vector.png'

const BarNav = () => {
    return (
        <div className='ContNav'>
            <img src={img} alt="Bars" className='bars'/>
            <Nav className="navBar">
                <Nav.Link href="#sobre-mi" className='navLink'>sobre mi</Nav.Link>
                <Nav.Link href="#habilidades" className='navLink'>habilidades</Nav.Link>
                <Nav.Link href="#proyectos" className='navLink'>proyectos</Nav.Link>
                <Nav.Link href="#certificados" className='navLink'>certificados</Nav.Link>
                <Nav.Link href="#Info" className='navLink'>Informacion de proyectos</Nav.Link>
            </Nav>
        </div>     
    );
}

export { BarNav } 