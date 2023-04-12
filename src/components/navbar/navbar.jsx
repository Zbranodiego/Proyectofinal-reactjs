import { Link } from 'react-router-dom'
import Cartwidget from '../cartwidget/cartwidget'
import './navstyle.css' 
function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary " data-bs-theme="dark">

            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <img src='/src/assets/sinfond.png' className='logo' />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/categoria/COLOR' className="nav-link">COLOR KAWS</Link>
                    <Link to='/categoria/B&W' className="nav-link">B&W KAWS</Link>

                    <Link to='/cart' className="navbar-nav">

                        <Cartwidget />

                    </Link>

                </div>

                </div>
            </div>

        </nav>
    )
}
export default Navbar

/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav> */