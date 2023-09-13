import {MdOutlineMenu} from "react-icons/md";



const Navigation=()=>{

return(
    <nav className="container">
        <div className='logo'>
            <img src="/images/brand_logo.png" alt="logo"/>
        </div>

        <div className="list">
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        </div>

        <div className="login">
          <button >Login</button>
        </div>

        <MdOutlineMenu className='menu'/>

      </nav>
)

}

export default Navigation