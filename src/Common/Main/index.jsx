import git from '../imgs/Git-Icon.png'
import gitHub from '../imgs/GitHub.png'
import bts from '../imgs/logo-bootstrap.png'
import css from '../imgs/logo-css.png'
import sass from '../imgs/Sass_Logo.png'
import js from '../imgs/logo-js.png'
import react from '../imgs/React-icon.svg.png'
import html from '../imgs/logo-html.png'
import ecomerce1 from '../imgs/letom3D.png'
import ecomerce2 from '../imgs/fondoJS.png'
import ecomerce3 from '../imgs/CocoPalli.png'
import ecomerce4 from '../imgs/Gess.png'
import ecomerce5 from '../imgs/FondoClima.jpg'
import img1 from '../imgs/tituloDesarrolloWeb.png'
import img2 from '../imgs/titulo javasCript.png'
import img3 from '../imgs/tituloReact.png'
import img4 from '../imgs/titulo Front End.jpeg'
import img5 from '../imgs/tituloIngles.png'
import img6 from '../imgs/Certificado intermediate.png'
import { Link } from 'react-router-dom'


const Main = () => {
    return (
        <div className="ContMain">
            <h2 className='Tit' id="proyectos">Experiencias</h2>
            <div className='ContProyects'>
                <div className='CajProyects Caj'>
                    <div className='titLinks'>
                        <h5>Este proyecto fue desarrollado completamente para practicas <b> Html5 / Java Script(ES6)</b></h5>
                        <Link to="https://totty19.github.io/Pf-GilAguiarJS/" className='Link'>Visitar Web</Link>
                    </div>
                    <img src={ecomerce2} alt="" />
                </div>
                <div className='CajProyects Caj'>
                    <div className='titLinks'>
                        <h5>Proyecto de practica desarrollada con <b>React Native</b> Utilizando una <b>API</b> mediante JSON de: OpenWeather</h5>
                        <Link to="https://github.com/Totty19/Clima-App" className='Link'>Repositorio</Link>
                    </div>
                    <img src={ecomerce5} alt="" className='imgNat'/>
                </div>
                <div className='CajProyects Caj'>
                    <div className='titLinks'>
                        <h5>iplementación de Firebase para la autenticación y gestión de bases de datos en tiempo real. <b>Fue realizada con: React Js y diseñada con Sass 100% Responsive</b></h5>
                        <Link to="https://cococopalli.000webhostapp.com/" className='Link'>Visitar Web</Link>
                    </div>
                    <img src={ecomerce3} alt="" />
                </div>
                <div className='CajProyects Caj'>
                    <div className='titLinks'>
                        <h5>Proyecto en desarrollo. Colaboración con desarrolladores(Backend y fullStack) y diseñadores UX/UI para implementar interfaces de usuario intuitivas. - Uso de <b>Git y GitHub</b> para el control de versiones y la colaboración en equipo. <b>Es realizada con: React js(Vite) y diseñada con Sass, 100% Responsive</b></h5>
                        <Link to="https://gesst-app-git-master-tomas-gil-aguiars-projects.vercel.app/" className='Link'>Visitar Web</Link>
                    </div>
                    <img src={ecomerce4} alt="" />
                </div>
                <div className='CajProyects Caj'>
                    <div className='titLinks'>
                        <h5>Este es un emprendimiento personal de objetos en 3D! <b> realizada con React Js y diseñada con Sass 100% Responsive</b></h5>
                        <Link to="https://totty19.github.io/letom3d/" className='Link'>Visitar Web</Link>
                    </div>
                    <img src={ecomerce1} alt="" />
                </div>
            </div>
            <h2 className='Tit' id="habilidades">Habilidades</h2>
            <div className='cajaHabs'>
                <div className="ContHab">
                    <img src={html} alt="html" />
                    <p className='oculto'>HTML</p>
                </div>
                <div className="ContHab">
                    <img src={css} alt="css" />
                    <p className='oculto'>CSS</p>
                </div>
                <div className="ContHab">
                    <img src={js} alt="js" />
                    <p className='oculto'>JAVA SCRIPT</p>
                </div>
                <div className="ContHab">
                    <img src={bts} alt="bootstrap" />
                    <p className='oculto'>BOOTSTRAP</p>
                </div>
                <div className="ContHab">
                    <img src={git} alt="git" />
                    <p className='oculto'>GIT</p>
                </div>
                <div className="ContHab">
                    <img src={gitHub} alt="github" />
                    <p className='oculto'>GITHUB</p>
                </div>
                <div className="ContHab">
                    <img src={sass} alt="sass" />
                    <p className='oculto'>SASS</p>
                </div>
                <div className="ContHab">
                    <img src={react} alt="react" />
                    <p className='oculto'>REACT</p>
                </div>
            </div>
            
            <h2 className='Tit' id="certificados">Certificados</h2>
            <div className='ContTitulos'>
                <img src={img1} alt="Titulo"/>
                <img src={img2} alt="Titulo"/>
                <img src={img3} alt="Titulo"/>
                <img src={img4} alt="Titulo"/>
                <img src={img5} alt="Titulo Ingles"/>
                <img src={img6} alt="Titulo Ingles intermediate"/>
            </div>
        </div>
    )
}

export { Main }