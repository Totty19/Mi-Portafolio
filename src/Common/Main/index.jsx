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
import img1 from '../imgs/tituloDesarrolloWeb.png'
import img2 from '../imgs/titulo javasCript.png'
import img3 from '../imgs/tituloReact.png'
import img4 from '../imgs/titulo Front End.jpeg'


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
                    <img src={ecomerce1} alt="" />
                    <p className='oculto2'>Proyecto ficticio diseñado con Html y Css<a href="https://totty19.github.io/PF-GilAguiar/" target='_blank' className='Link'>Visitar</a></p>
                </div>
                <div className='CajProyects' data-aos="fade-right">
                    <img src={ecomerce2} alt="" />
                    <p className='oculto2'>Proyecto ficticio diseñado con Html, Css y Java Script<a href="https://totty19.github.io/Pf-GilAguiarJS/" target='_blank' className='Link'>Visitar</a></p>
                </div>
            </div>
            <h2 className='Tit' id="certificados">Titulos</h2>
            <div className='ContTitulos'>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
            </div>



        </div>
    )
}

export { Main }