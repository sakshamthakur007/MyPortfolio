import React from 'react'
import './Menus.css';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (<><div className="navbar-profile-pic">
        <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="profile pic" />
    </div>
    <div className="nav-items">
        <div className="nav-item">
        <div className="nav-link"><FcHome/>Home</div>
        <div className="nav-link"><FcAbout/>About</div>
        <div className="nav-link"><FcBriefcase/>Work Experience</div>
        <div className="nav-link"><FcBiotech/>Tech Stack</div>
        <div className="nav-link"><FcReading/>Education</div>
        <div className="nav-link"><FcVideoProjector/>Projects</div>
        <div className="nav-link"><FcVoicePresentation/>Testimonial</div>
        <div className="nav-link"><FcBusinessContact/>Contact</div>
        </div>
    </div>
    </>):(
        <>
        <div className="nav-items">
        <div className="nav-item">
        <div className="nav-link"><FcHome title='Home'/></div>
        <div className="nav-link"><FcAbout title='About'/></div>
        <div className="nav-link"><FcBriefcase title='Work'/></div>
        <div className="nav-link"><FcBiotech title='Tech'/></div>
        <div className="nav-link"><FcReading title='Education'/></div>
        <div className="nav-link"><FcVideoProjector title='Projects'/></div>
        <div className="nav-link"><FcVoicePresentation title='Testimonial'/></div>
        <div className="nav-link"><FcBusinessContact title='Contact'/></div>
        </div>
        </div>
        </>
    )}
    
    </>
  )
}

export default Menus
