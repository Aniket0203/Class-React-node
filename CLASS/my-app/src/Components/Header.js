import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light container">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/aboutus'>Aboutus</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/services'>services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/lifecycle'>lifecycle</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/contactus'>contactus</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/paraent-child'>PC-1</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/State-lift'>Comp1</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/did-update'>Did update</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/err-example'>err</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/hook">Hook1</Link></li>
            <li><Link class="dropdown-item" to="/hook2">Hook2</Link></li>
            <li><Link class="dropdown-item" to="/add">Addproduct</Link></li>
            <li><Link class="dropdown-item" to="/show">showproduct</Link></li>


            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
