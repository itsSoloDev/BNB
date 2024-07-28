import logo from '/assets/airbnb.svg'

export default function Navbar(){
    return(
        <nav>
            <img src={logo} className='nav-logo'/>
        </nav>
        
    )
}