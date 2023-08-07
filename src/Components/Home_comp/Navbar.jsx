
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import {Dialog,styled} from '@mui/material';
import  '../../App.css'
import { useState } from "react";
import { getSearchResult } from "../../api/api";

function Navbar({handleDialog}) {
  const[search,setsearch]=useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const handle_Dialog = () => {
    setDialogVisible(!dialogVisible);
  };
  const handleChange=async(e)=>{
    const searchTerm = e.target.value;
    setsearch(searchTerm);
    try {
      const response = await getSearchResult(searchTerm);
      console.log(response); // Logging the entire response object
      console.log(searchTerm); // Logging the updated search term value.
      setRecommendations(response);
    } catch (error) {
      console.error(error);
    }
  };
    return (
      <>
      <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className='logo' src="https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/logo-dark-groww.svg" alt="logo" srcset="" /></a>
    <div className="NavItem">
        <SearchIcon style={{fontSize:28,padding:4}}/>
        <input className="SearchBar" type="search" placeholder="What are you looking for today ?" aria-label="Search" value={search} onChange={handleChange} onClick={handle_Dialog}/>
        {dialogVisible && (
        <div className="CustomDialogContent" style={{ textOverflow: "none", height:'400px',borderRadius:'',marginTop:"27.5rem",width:"27.5rem",background:"#ffffff", zIndex: 1,position: "absolute", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div  style={{width:"20rem", textOverflow:"none"}}>
        {recommendations.slice(0,6).map((item, index) => (
        <div className="item_div" key={index} style={{width:"393.88px" , height:"60px",padding:"auto", textAlign:"center", display:"flex",flexDirection:"column"}}>
          <a  href="/" style={{textDecoration:"none",color:"#44475b", font:"14px arial"}}>{item.Name}</a> 
          <a  href="/" style={{textDecoration:"none",color:"#44475b", font:"14px arial"}}>{item.Country}</a> 
          <a  href="/" style={{textDecoration:"none",color:"#44475b", font:"14px arial"}}>{item.ISIN}</a> 
        </div>
        
      ))}
      </div>
      </div>
        )}
    </div>
    <button className="btn" onClick={handleDialog}>Login/Register</button>
  </div>
</nav>
      </>
    );
  }
  
  export default Navbar;
  