import React, { useState } from "react";
import Navbar from '../Components/Home_comp/Navbar'
import Main from "../Components/Home_comp/Main";
import Section from "../Components/Home_comp/Section";
import Footer from "../Components/Home_comp/Footer";
import Signup_Dialog from "../Components/Home_comp/Signup_Dialog";
function Home() {
   const[toggleDialog,settoggledialog]=useState(false);
   const handleDialog=()=>{
    settoggledialog(prevState => !prevState)
   }
    return (
      <>
      <Navbar handleDialog={handleDialog}/>
      <Main/>
      <Section/>
      <Footer/>
      <Signup_Dialog handleDialog={handleDialog} toggleDialog={toggleDialog}/>
      </>
    );
  }
  
  export default Home;
  