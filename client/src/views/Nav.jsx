import { Link } from 'react-router-dom';
import ProNature from '../ProNature.svg'

const Nav = (props) => {


    return (
        <div className='nav'>
            {/* <img src={ProNature} className='logo-app' alt="logowtf" /> */}
            <div className='links'>
                <Link to={"/"} className='linkText'>Home</Link>
                <Link to={"/recipes/create"} className='linkText'>Create</Link>
                <Link to={"/recipes/viewall"} className='linkText'>Recipes</Link>
                <Link to={"/"} className='linkText'>About Us</Link>
            </div>
            <div id='navbottom'>

            </div>

        </div>
    )

}

export default Nav;