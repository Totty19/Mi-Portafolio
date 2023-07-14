import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <NavLink to="#sobre-mi" className="navLink">sobre mi</NavLink>
            <NavLink to="#sobre-mi" className="navLink">habilidades</NavLink>
            <NavLink to="#sobre-mi" className="navLink">proyectos</NavLink>
            <NavLink to="#sobre-mi" className="navLink">certificados</NavLink>
        </nav>  
    )
}

export { Navbar }