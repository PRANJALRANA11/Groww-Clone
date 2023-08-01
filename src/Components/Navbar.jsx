
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import  '../App.css'
function Navbar() {
    return (
      <>
      <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className='logo' src="https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/logo-dark-groww.svg" alt="logo" srcset="" /></a>
    <div className="NavItem">
        <SearchIcon style={{fontSize:28,padding:4}}/>
        <input className="SearchBar" type="search" placeholder="What are you looking for today ?" aria-label="Search"/>
    </div>
    <button className="btn">Login/Register</button>
  </div>
</nav>
      </>
    );
  }
  
  export default Navbar;
  