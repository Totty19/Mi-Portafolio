import { Link } from "react-router-dom"
import MiCv from '../Mi-CV.pdf'
import gitHub from '../imgs/GitHub.png'
import linkedin from '../imgs/logo-Linkedin.png'
import flecha from '../imgs/flecha.png'
import reacFond from '../imgs/React-icon.svg.png'

const Header = () => {
    return (
        <div className="ContHead">
            <img src={reacFond} alt="" className="PcFond"/>
            <div className="head1" id="sobre-mi">
                <h1>Hola!</h1>
                <h2>Mi nombre es <b>Tomas Gil Aguiar</b></h2>
                <h2><b>desarrollador</b> front-end</h2>
                <div className="ContRedes">
                    <Link to="https://github.com/Totty19"><img src={gitHub} alt="" className="Logo"/></Link>
                    <Link to="https://www.linkedin.com/in/tomas-gil-aguiar-71b572235/"><img src={linkedin} alt=""  className="Logo"/></Link>
                    <a className="Logo" href={MiCv} download>Cv<img src={flecha} alt="" /></a>
                </div>
            </div>
            <div className="head2">
                <h3>
                    Soy un apasionado por la tecnología y el desarrollo web, con habilidades en la creación de interfaces de usuario utilizando herramientas como HTML, CSS, JavaScript y React.js. He trabajado en proyectos particulares, lo que me ha permitido desarrollar habilidades técnicas y adquirir experiencia práctica. Soy creativo, comprometido y con una gran capacidad de iniciativa. Si deseas conocer más sobre mi y mis habilidades técnicas, te invito a revisar mi portfolio o a contactarme directamente.
                </h3>
            </div>
        </div>
    )
}

export { Header }