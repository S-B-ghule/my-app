//This are componets we can reuse it multiple times 
//components are nothing but just like js function which takes a arbitary inputs knowns as props and it is resuable also
//You can pass as many props you want and props could be anything like array,object,link etc etc
//props are read only




import React from 'react'
import PropTypes from 'prop-types'   //shortcut impt
// import { Link } from 'react-router-dom'


export default function Navbar(props) {   //here props.title means we can use it for anyother app also and can change also for a specific name or content
    return (
      //below line is writeen in { } and `` bcz to use js and template literal and props.mode is basically writeen for light and dark mode
       <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  

  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" to="/about">{props.aboutText}</a>
        </li> */}
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>

    )
}

//Proptypes are for a specified datatype for eg here we have set title as propType is string so when we will add a number by mistake it will give error in console
//you can set anyting like if you want array or object number etc
//isrequired is for adding that thing compulsory or it will give error if you have not set the default props
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired,
                    }

//setting default prop here 
// Navbar.defaultProps = {
//   title: "Add a fcking titile",
//   aboutText:"Fill me",
// }

