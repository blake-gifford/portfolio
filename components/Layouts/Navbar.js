import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light nav-width">
                <a className="navbar-brand" href="/">&lt;/&gt;</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#intro">Home</a>
                    <a className="nav-item nav-link" href="#tech">Preferred Tech</a>
                    <a className="nav-item nav-link" href="#personal">Personal Projects</a>
                    <a className="nav-item nav-link" href="#work">Work Projects</a>
                    <a className="nav-item nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar