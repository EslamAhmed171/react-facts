import logo from '../images/reactjs-icon.png'
function Navbar () {
    return(
        <nav className="nav">
           <img src={logo} class="nav-logo"/>
           <h3 class="nav-logo-text">ReacFacts</h3>
           <h4 class="nav-title">React Course - Project1</h4>
        </nav>
    )
}

export default Navbar;