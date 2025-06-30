import ecomerce1 from '../imgs/letom3D.png'
import ecomerce2 from '../imgs/fondoJS.png'
import ecomerce3 from '../imgs/CocoPalli.png'
import ecomerce4 from '../imgs/Gess.png'
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
            <h2 className='Tit' id="proyectos">Proyectos</h2>
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
            <h2 className='Tit' id="certificados">Certificados</h2>
            <div className='ContTitulos'>
                <img src={img1} alt="Titulo"/>
                <img src={img2} alt="Titulo"/>
                <img src={img3} alt="Titulo"/>
                <img src={img4} alt="Titulo"/>
                <img src={img5} alt="Titulo Ingles"/>
                <img src={img6} alt="Titulo Ingles intermediate"/>
            </div>
            <h2 className='Tit' id="Contactame">Contactame</h2>
            <div>
                <form
                action="mailto:tomiexe16@gmail.com"
                method="post"
                encType="text/plain"
                className='Contac'
                >
                    <input type="text" id="name" name="name" required placeholder='Tu nombre'/>
                    <input type="email" id="email" name="email" required placeholder='Tu email'/>
                    <textarea id="message" name="message" rows="5" required placeholder='Cuenta conmigo para trabajar juntos...'></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    )
}

export { Main }