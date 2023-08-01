import React,{useState} from 'react'
import {Dialog,styled} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function Signup_Dialog() {


  const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
      width: '1000px',
      height:'400px',
      borderRadius:'1rem',
    },
  }));
  return (

    <>
      <CustomDialog open={true}>
        <div className="left" style={{
            backgroundImage: 'url("/assests/dialog_bg.PNG")', 
            objectFit: 'cover',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            width:'50%',
            height:'119%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            
          }}>
            <span
           style={{font:'26px Roboto,system ui', color:'white',marginTop:'5rem'}}>Simple, Free Investing</span>
                  <div className="animated_bar" style={{background:'white',width:"44px",height:'5px',marginTop:'11rem',marginRight:'15rem',marginLeft:'3rem' , animation: 'lls-login-width-animation 2.5s ease-in-out infinite'}}>
        </div >
        <div className="animated_text" style={{marginRight:'10rem',marginTop:'1rem',font:'26px Roboto,system ui',color:'white',    animation: 'lls-fade-in-out 2.5s linear infinite' }}
        >Just Grow</div>
        </div>
      </CustomDialog>
    </>
  )
}
