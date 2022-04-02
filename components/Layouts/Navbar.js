import React from 'react'
import Link from 'next/link'



const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light nav-width">
                <Link href="/">
                    <a className="navbar-brand" >&lt;/&gt;</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link href="#intro">
                        <a className="nav-item nav-link" >Home</a>
                    </Link>
                    <Link href="#personal">
                        <a className="nav-item nav-link" >Personal Projects</a>
                    </Link>
                    <Link href="#contact">
                        <a className="nav-item nav-link" >Contact</a>
                    </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar