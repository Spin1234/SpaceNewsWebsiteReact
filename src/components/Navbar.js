import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = (props)=> {

  const[search, setSearch] = useState("");

  const updateContent = (e)=>{
    
    setSearch(e.target.value);
    //console.log(search);
    props.onType(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
  };

    return ( 
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"height": "5rem"}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{"backgroundColor": "lightgray", "padding": ".4rem", "border": ".4rem", "borderRadius": ".4rem","fontWeight": "bold"}}>SpaceNewsHub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/articles">Articles</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              <form className="d-flex" onSubmit={handleSubmit}>
                <input value={search} onChange={updateContent} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar