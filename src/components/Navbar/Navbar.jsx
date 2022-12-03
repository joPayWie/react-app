import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
    const test = {href: "#"}
    return ( 
        <nav className="navbar" style={{
            backgroundColor: "#c2c2c2"
        }}>
            <img src={logo} alt="logo" />
            <a href={test.href}>Inicio</a>
            <a href={test.href}>Blog</a> 
            <a href={test.href}>Galería</a>
            <a href={test.href}>Contacto</a>  
        </nav>
    )
}

// se puede hacer export ahí arriba al declarar el componente y sino también al final de todo poniendo export { Navbar }