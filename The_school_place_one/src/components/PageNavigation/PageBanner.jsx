import "./PageNavigation.css";

import Clock from "../../assets/images/PageNavigation_images/Clock.svg?react";
import Location from "../../assets/images/PageNavigation_images/Location.svg?react";
import PersonIcon from "../../assets/images/PageNavigation_images/PersonIcon.svg?react";
import Flag from "../../assets/images/PageNavigation_images/Flag.png";
import ArrowDown from "../../assets/images/PageNavigation_images/ArrowDown.svg?react";
import Facebook from "../../assets/images/PageNavigation_images/Facebook.svg?react";
import Twitter from "../../assets/images/PageNavigation_images/Twitter.svg?react";
import Skype from "../../assets/images/PageNavigation_images/Skype.svg?react";
import Linkedin from "../../assets/images/PageNavigation_images/Linkedin.svg?react";

export function PageBanner() {
  return (
    <>
      <div className="page-banner">
        <section className="page-banner__content">
          <span>
            <Clock className="page-banner__content___icon" />
             Working : Monday-Friday.9:am - 5:Pm
          </span>
          <span>
            <Location className="page-banner__content___icon" /> 
            Hudson,Wisconsin(WI), 54016
          </span>
        </section>

        <section className="page-banner__iconswrapper">
          <div className="page-banner___icons-innerwrapper">
          <div className="page-banner___changelang">
            <PersonIcon className="page-banner__content___icon" />
            Login/Register
            <ArrowDown className="page-banner___changelang_icon arrowdown" />
          </div>
          <div className="page-banner___icons">
            <Facebook className="page-banner___icons_icon" />
            <Twitter className="page-banner___icons_icon" />
            <Skype className="page-banner___icons_icon" />
            <Linkedin className="page-banner___icons_icon" />
          </div>
          </div>
          {/* <div className="blueline"></div> */}
        </section>
      </div>
    </>
  );
}
