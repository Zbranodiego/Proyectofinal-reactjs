import Cartwidget from '../cartwidget/cartwidget'
import './navstyle.css'    
function Navbar() {
        return (
            <div>
                <nav>        
                <img src="src/assets/sinfond.png" className='logo' />        
                    <ul className='home'>
                    <li> <a href="">HOME</a></li>
                    <li> <a href="">COLLECTION</a></li>
                    <li> <a href="">GALERY</a></li>         
                    </ul>
                    <Cartwidget/> 
                </nav>
            </div>
        )
    }
export default Navbar