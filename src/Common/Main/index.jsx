import git from '../imgs/Git-Icon.png'
import gitHub from '../imgs/GitHub.png'
import bts from '../imgs/logo-bootstrap.png'
import css from '../imgs/logo-css.png'
import sass from '../imgs/Sass_Logo.png'
import js from '../imgs/logo-js.png'
import react from '../imgs/React-icon.svg.png'
import html from '../imgs/logo-html.png'
import ecomerce1 from '../imgs/fondoEcom.png'
import ecomerce2 from '../imgs/fondoJS.png'
import ecomerce3 from '../imgs/CocoPalli.png'
import ecomerce4 from '../imgs/Gess.png'
import img1 from '../imgs/tituloDesarrolloWeb.png'
import img2 from '../imgs/titulo javasCript.png'
import img3 from '../imgs/tituloReact.png'
import img4 from '../imgs/titulo Front End.jpeg'
import img5 from '../imgs/tituloIngles.png'
import { Link } from 'react-router-dom'


const Main = () => {
    return (
        <div className="ContMain">
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
            <h2 className='Tit' id="proyectos">Proyectos</h2>
            <div className='ContProyects' >
                <div className='CajProyects'>
                    <img src={ecomerce1} alt="ecomerce1" />
                    <p className='oculto2'>Proyecto ficticio<a href="#Info" className='Link'>Mas info+</a><Link to="https://totty19.github.io/PF-GilAguiar/" className='Link'>Visitar Web</Link></p>
                </div>
                <div className='CajProyects' >
                    <img src={ecomerce2} alt="ecomerce2" />
                    <p className='oculto2'>Proyecto ficticio<a href="#Info" className='Link'>Mas info+</a><Link to="https://totty19.github.io/Pf-GilAguiarJS/" className='Link'>Visitar Web</Link></p>
                </div>
                <div className='CajProyects'>
                    <img src={ecomerce3} alt="ecomerce3" />
                    <p className='oculto2'>Proyecto real<a href="#Info" className='Link'>Mas info+</a><Link to="https://cococopalli.000webhostapp.com/" className='Link'>Visitar Web</Link></p>
                </div>
                <div className='CajProyects' >
                    <img src={ecomerce4} alt="ecomerce4" />
                    <p className='oculto2'>Proyecto real<a href="#Info" className='Link'>Mas info+</a><Link to="https://gesst-app-git-master-tomas-gil-aguiars-projects.vercel.app/" className='Link'>Visitar Web</Link></p>
                </div>
            </div>
            <h2 className='Tit' id="certificados">Titulos</h2>
            <div className='ContTitulos'>
                <img src={img1} alt="Titulo"/>
                <img src={img2} alt="Titulo"/>
                <img src={img3} alt="Titulo"/>
                <img src={img4} alt="Titulo"/>
                <img src={img5} alt="Titulo Ingles"/>
            </div>
            <h2 className='Tit' id="Info">Informacion de proyectos</h2>
            <div className='ContProyects'>
                <div className='CajProyects Caj'>
                    <img src={ecomerce1} alt="" />
                    <h5>Este proyecto fue desarrollado completamente para practicas de: <b>Html5 y Css3(Sass y Boostrap) 100% Responsive</b></h5>
                    <Link to="https://totty19.github.io/PF-GilAguiar/" className='Link'>Visitar Web</Link>
                </div>
                <div className='CajProyects Caj'>
                    <img src={ecomerce2} alt="" />
                    <h5>Esta segunda parte del proyecto fue desarrollado completamente para practicas añadiendole <b>Java Script</b></h5>
                    <Link to="https://totty19.github.io/Pf-GilAguiarJS/" className='Link'>Visitar Web</Link>
                </div>
                <div className='CajProyects Caj'>
                    <img src={ecomerce3} alt="" />
                    <h5>Este proyecto fue desarrollado para una clienta personal que necesitaba una web donde pueda mostrar sus articulos en venta tieniendo en cuenta su stock, carrito de compra y demas detalles. Utilice <b>Firebase</b> como base de datos, a su vez esta tiene una web aparte, donde solo puede acceder ella. en dicha web Puede buscar y ver todos los pedidos realizados con datos ya dados. <b>Fue realizada con: React Js y diseñada con Sass 100% Responsive</b></h5>
                    <Link to="https://cococopalli.000webhostapp.com/" className='Link'>Visitar Web</Link>
                </div>
                <div className='CajProyects Caj'>
                    <img src={ecomerce4} alt="" />
                    <h5>Este proyecto sigue en desarrollo. Es un proyecto grupal realizado por 3 desarrolladores(Frontend, Backend y fullStack) y un diseñador UX UI. Aqui nos estamos manejando con sus respectivas ramas desde <b>GitHub</b>, la idea de este proyecto es diseñarla para que gestores tengan un lugar donde puedan mostrar: Ubicacion en la que trabajan, especializaciones que ejercen y pueda ver sus valoraciones. Mi trabajo aqui es realizar todo el Front, dado que cuando el back este terminado, poder unirlos y comenzar a probar dicha web. <b>Es realizada con: React js(Vite) y diseñada con Sass 100% Responsive</b></h5>
                    <Link to="https://gesst-app-git-master-tomas-gil-aguiars-projects.vercel.app/" className='Link'>Visitar Web</Link>
                </div>
            </div>
        </div>
    )
}

export { Main }