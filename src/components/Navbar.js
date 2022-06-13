import React from 'react'
import Proptypes from 'prop-types'
export default function Navbar(props) {


const handleBgChange = () =>{
  let rty = document.getElementById('search').value;
  console.log(rty)
 
}

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='nav'>
  <div className="container-fluid">
 <a className="navbar-brand" href="#" >{props.title}</a > 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" id='ui'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.html">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropDown}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Mail Us</a></li>
            <li><a className="dropdown-item" href="#">Phone Id</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">{props.extra}</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2"  placeholder="Search dark bG's"  id='search'/>
        <button className="btn btn-outline-success" type='submit' onClick={handleBgChange}>Search</button>
      </form>
    </div>
  </div>
</nav>    
    </div>
  )
}


Navbar.defaultProps = {
    title : 'Set title here' , 
    extra: 'Extra stuff here' , 
    dropDown : 'ContactUs'
}
