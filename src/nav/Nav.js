import './Nav.css';
import plane2 from '../util/images/plane2.jpg';


function Nav() {
    
    return (
        <header className='nav'>
            <img src={plane2} className='plane2' alt='pic of plane'/>
            <h1 className='heading'>Voyage Vibes</h1>
            <img src={plane2} className='plane2' alt='pic of plane'/>
        </header>
    )
}

export default Nav;