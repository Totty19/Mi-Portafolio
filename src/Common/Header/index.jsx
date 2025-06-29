import { Link } from "react-router-dom"
import MiCv from '../CvTomasGilAguiar.pdf'
import gitHub from '../imgs/GitHub.png'
import linkedin from '../imgs/logo-Linkedin.png'
import flecha from '../imgs/flecha.png'
import reacFond from '../imgs/React-icon.svg.png'
import git from '../imgs/Git-Icon.png'
import bts from '../imgs/logo-bootstrap.png'
import css from '../imgs/logo-css.png'
import sass from '../imgs/Sass_Logo.png'
import js from '../imgs/logo-js.png'
import react from '../imgs/React-icon.svg.png'
import html from '../imgs/logo-html.png'


const Header = () => {
    return (
        <div className="ContHead">
            <img src={reacFond} alt="" className="PcFond"/>
            <div className="head1" id="sobre-mi">
                <h1>Hola!</h1>
                <h2>Mi nombre es <b>Tomas Gil Aguiar</b></h2>
                <h2><b>Desarrollador</b> front-end</h2>
                <p>
                    Soy una persona apasionada por el diseño y con mucha capacidad de resolver problemas reales con código.
                </p>
                <div className="ConSpinner">
                    <div class="spinner">
                        <div class="spinner1"></div>
                    </div>
                    <p>En busqueda laboral</p>
                </div>
                <div className="ContRedes">
                    <span className="tooltip G">GitHub</span>
                    <Link to="https://github.com/Totty19"><img src={gitHub} alt="" className="Logo"/></Link>
                    <span className="tooltip L">Linkedin</span>
                    <Link to="https://www.linkedin.com/in/tomas-gil-aguiar/"><img src={linkedin} alt=""  className="Logo"/></Link>
                    <span className="tooltip D">Descargar</span>
                    <a className="Logo" href={MiCv} download>Cv<img src={flecha} alt="" /></a>
                </div>
            </div>
            <div className="head2">
                <h2 className='Tit' id="habilidades">Habilidades</h2>
                <div className='cajaHabs'>
                    <div className="ContHab">
                        <img src={html} alt="html" />
                    </div>
                    <div className="ContHab">
                        <img src={css} alt="css" />
                    </div>
                    <div className="ContHab">
                        <img src={js} alt="js" />
                    </div>
                    <div className="ContHab">
                        <img src={bts} alt="bootstrap" />
                    </div>
                    <div className="ContHab">
                        <img src={git} alt="git" />
                    </div>
                    <div className="ContHab">
                        <img src={gitHub} alt="github" />
                    </div>
                    <div className="ContHab">
                        <img src={sass} alt="sass" />
                    </div>
                    <div className="ContHab">
                        <img src={react} alt="react" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Header }