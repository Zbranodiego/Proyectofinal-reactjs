import { Link } from 'react-router-dom'
import Cartwidget from '../cartwidget/cartwidget'
import { useCartContext } from '../../context/CartContext'
import './navstyle.css' 
function Navbar() {
    const {cantidadTotal} = useCartContext()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary " data-bs-theme="dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <img src='/src/assets/sinfond.png' className='logo' />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/categoria/COLOR' className="nav-link">COLOR</Link>
                    <Link to='/categoria/B&W' className="nav-link">BLACK & WHITE</Link>
                    <Link to='/cart' className="navbar-nav">
                    {cantidadTotal()> 0 && cantidadTotal()}
                    <Cartwidget />
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
