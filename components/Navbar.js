import React from 'react'
import { Nav, Button , Container } from 'react-bootstrap';
import Image from 'next/image';
import Image1 from '../public/logo.png'
function Navbar() {
  return (
    <div>
    <Nav class="navbar navbar-expand-lg navbar-light bg-light" id='navbar-2'>
    <Image
                src={Image1}
                alt="Abc logo"
                className="logo"
                width="150"
                height="150"
              />
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

      </ul>
    </div>
  </Nav>
    </div>
  )
}

export default Navbar