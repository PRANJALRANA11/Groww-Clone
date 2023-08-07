import React,{useState} from 'react'
import {Dialog,styled} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function Signup_Dialog({toggleDialog,handleDialog}) {


  const CustomDialog = styled(Dialog)(({ theme }) => ({
   
    "& .MuiDialog-paper": {
      width: '60%', // Set the width to 80% of the screen width
      maxWidth: '900px',
      height:'400px',
      borderRadius:'1rem',
    },
  }));
  return (

    <>
      <CustomDialog open={toggleDialog}>
      <CloseIcon onClick={handleDialog}
    style={{
      position: 'absolute', // Use absolute positioning for the CloseIcon
      top: '10px', // Adjust top and right values to position the CloseIcon
      right: '10px',
      cursor: 'pointer', // Add a cursor style for interaction
    }}
  />
        <div style={{display:'flex'}}>
        <div className="left" style={{
            backgroundImage: 'url("/assests/dialog_bg.PNG")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            width:'50%',
            height:'119%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            minWidth: '300px',
            
          }}>
            <span
           style={{font:'26px Roboto,system ui', color:'white',marginTop:'5rem'}}>Simple, Free Investing</span>
                  <div className="animated_bar" style={{background:'white',width:"44px",height:'5px',marginTop:'11rem',marginRight:'15rem',marginLeft:'3rem' , animation: 'lls-login-width-animation 2.5s ease-in-out infinite'}}>
        </div >
        <div className="animated_text" style={{marginRight:'10rem',marginTop:'1rem',font:'26px Roboto,system ui',color:'white',    animation: 'lls-fade-in-out 2.5s linear infinite' }}
        >Just Grow</div>
        </div>
        <div style={{ width:'50%', marginTop:'50px',marginLeft:50}}>
          <span style={{height:48,font:'26px GrowwSans,NotoSans,system-ui',color:'#44475b'}}>Welcome to Groww</span>
          <input type="text" placeholder='your email address' style={{marginTop:100,border:'none',borderBottom:'1px solid black', width:240,outline: 'none',}} />
          <button className="btn" style={{marginTop:'2rem'}} onClick={handleDialog}>continue</button>
        </div>
        </div>
      </CustomDialog>
    </>
  )
}
