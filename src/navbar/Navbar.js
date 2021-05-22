import "./navbar.css"

const Navbar = ({sidebarOpen, openSidebar}) =>{
    return(
        <nav className= "navbar">
            <div className="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar_left">
                <a href="#">Subscribe</a>
                <a href="#">Video</a>
                <a href="#" className= "active_link">Admin</a>
            </div>
            <div classNam="navbar_right">
                <a href="#"><i className="fa fa-search"></i></a>
                <a href="#"><i className="fa fa-clock"></i></a>
                
            </div>

        </nav>
    )
}

export default Navbar;