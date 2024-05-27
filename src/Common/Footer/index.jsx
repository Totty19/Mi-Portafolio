import { Link } from "react-router-dom"
import MiCv from '../CvTomasGilAguiar.pdf'
import gitHub from '../imgs/GitHub.png'
import linkedin from '../imgs/logo-Linkedin.png'
import flecha from '../imgs/flecha.png'
import email from '../imgs/correo.png'
import ubic from '../imgs/logoUbic.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="ContRedes">
                <Link to="https://github.com/Totty19"><img src={gitHub} alt="" className="Logo"/></Link>
                <Link to="https://www.linkedin.com/in/tomas-gil-aguiar-71b572235/"><img src={linkedin} alt="" className="Logo"/></Link>
                <a className="Logo" href={MiCv} download>Cv<img src={flecha} alt="" /></a>
            </div>
            <div className="ubicYCont">
                <h5><img src={ubic} alt="" />Argentina | Entre Rios | Concepcion del urugay</h5>
                <h5><img src={email} alt="" />tomiexe16@gmail.com</h5>
            </div>
            <p>Página desarrollada con React.Js y diseñada con Sass</p>
            <p>Está adaptada para cualquier dispositivo <img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></p>
            <p>Desarrollada y diseñada por Tomas Gil Aguiar | 2024</p>
        </div>
    )
}

export { Footer }