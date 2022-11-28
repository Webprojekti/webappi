import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" >Webapp</a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Rekisteröidy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Kirjaudu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/delete">Poistha</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}