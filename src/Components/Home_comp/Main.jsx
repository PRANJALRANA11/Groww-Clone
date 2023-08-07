import React  from 'react'
import '../../App.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {
  AOS.init();
  return (
    <>
        <main className="Content">
  <article className="Header">
    <div className="Heading" >
      <span className="title">
        All things finance, right here
      </span>
      <h1 className="subtitle">Built for a growing india</h1>
      <button id='getStarted_btn' className="btn">Get started</button>
      <img className='coverPhoto' src="/assests/snip.PNG" alt="logo"/>
    </div>
    <div className="right_side" data-aos="fade-left"   data-aos-delay="1200">
      <img src="assests/mobile.PNG" alt="" />
    </div>
    <div className="left_side"  data-aos="fade-right"   data-aos-delay="1400">
      <img className='left_ind' src="assests/ind.PNG" alt="ind-build"  />
      <span className='left_side_heading'>Indian markets at your fingertips.</span>
      <h1 id='left_side_sub_heading' className="subtitle">Long-term or short-term , high-risk or low-risk. Be the kind of investor you want to be</h1>
      <a className='left_side_anchr' href="/"><img src="assests/stocks&intraday.PNG" alt="" srcset="" /> Stocks & Intraday <KeyboardArrowRightIcon style={{marginLeft:'6.9rem'}}/></a>
      <a className='left_side_anchr' href="/"><img src="assests/Mutualfunds&sips.PNG" alt="" srcset="" /> Mutual funds & SIPs <KeyboardArrowRightIcon style={{marginLeft:'5.7rem'}}/></a>
      <a  className='left_side_anchr'href="/"><img src="assests/Future&options.PNG" alt="" srcset="" /> Futures and Options <KeyboardArrowRightIcon style={{marginLeft:'5.6rem'}}/></a>
      <div className="credit_containor">
        <img className='left_ind' src="assests/credit.PNG" alt="" srcset="" />
        <span>Credit when you need it.</span>
        <p>Apply for loan get within minutes</p>
        <button className="btn" id='know_more'>Know more</button>
      </div>
      <div className="right_bottom"  data-aos="fade-left"   data-aos-delay="1400">
        <img src="assests/cards.PNG" alt="logo" srcset="" />
      </div>
    </div>
  </article>
</main>
    </>
  )
}
