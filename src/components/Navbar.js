import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = "container">
            <header id = "page-top">
                <nav>
                <span className = "header-link"><Link to = "/"      >Home         </Link></span>
                <span className = "header-link"><Link to = "/about" >About        </Link></span>
                <span className = "header-link"><Link to = "/team"  >Meet the Team</Link></span>
                <span className = "header-link"><Link to = "/tweets">Tweets       </Link></span>
                </nav>
            </header>
        </div>
    )
}

export default Navbar