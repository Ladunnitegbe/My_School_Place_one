import "./Footer.css";
import Locationfooter from "../../assets/images/footer_images/location_footer.svg?react";
import Phone from "../../assets/images/footer_images/phone.svg?react";
import Email from "../../assets/images/footer_images/email.svg?react";
import FacebookBlue from "../../assets/images/footer_images/facebook_blue.svg?react";
import Instagram from "../../assets/images/footer_images/instagram.svg?react";
import Pinterest from "../../assets/images/footer_images/pinterest.svg?react";
import TwitterBlue from "../../assets/images/footer_images/twitter_blue.svg?react";
import Arrowleft from "../../assets/images/footer_images/arrowleft.svg?react";
import TheSchoolPlaceLogo from "../../assets/images/PageNavigation_images/theschoolplacemlogo.png";
import Galleryone from "../../assets/images/footer_images/galleryone.png";
import Gallerytwo from "../../assets/images/footer_images/gallerytwo.png";
import Gallerythree from "../../assets/images/footer_images/gallerythree.png";
import Galleryfour from "../../assets/images/footer_images/galleryfour.png";
import Galleryfive from "../../assets/images/footer_images/galleryfive.png";
import Gallerysix from "../../assets/images/footer_images/gallerysix.png";
import Button from "../Button/Button.jsx";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <hr className="footer_line"/>
        <main className="footer_main">
          <address className="footer_one">
            <div className="footer_address">
              <div className="footer_one_icon_wrapper">
                <Locationfooter />
              </div>
              <div className="footer_address_details">
                <h5 className="footer_one_heading">Address:</h5>
                <h3 className="footer_one_address_value">
                  1925 Boggess Street
                </h3>
              </div>
            </div>
            <div className="vertical_line"></div>
            <div className="footer_address">
              <div className="footer_one_icon_wrapper">
                <Phone />
              </div>
              <div className="footer_address_details">
                <h5 className="footer_one_heading">Phone:</h5>
                <h3 className="footer_one_address_value">(00) 875 784 568</h3>
              </div>
            </div>
            <div className="vertical_line"></div>
            <div className="footer_address">
              <div className="footer_one_icon_wrapper">
                <Email />
              </div>
              <div className="footer_address_details">
                <h5 className="footer_one_heading">Email:</h5>
                <h3 className="footer_one_address_value">info@gmail.com</h3>
              </div>
            </div>
          </address>

          <section className="footer_two">
            <div className="footer_two_socialmedia_section">
              <img src={TheSchoolPlaceLogo} className="footer_two_logo" />
              <p className="footer_two_paragraph">
                Interdum velit laoreet id donec ultrices tincidunt arcu.
                Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.
              </p>
              <div className="footer_two_icons_container">
                <div className="footer_two_icon_wrapper">
                  <FacebookBlue />
                </div>
                <div className="footer_two_icon_wrapper">
                  <Instagram />
                </div>
                <div className="footer_two_icon_wrapper">
                  <Pinterest />
                </div>
                <div className="footer_two_icon_wrapper">
                  <TwitterBlue />
                </div>
              </div>
            </div>
            <div className="footer_two_services">
              <h4 className="footer_two_services_heading">Our Services:</h4>
              <ul className="footer_two_services_list">
                <li className="footer_two_services_list_item">
                  <Arrowleft className="footer_list_icon"/>
                  Web Development
                </li>
                <li className="footer_two_services_list_item">
                  <Arrowleft className="footer_list_icon" />
                  UI/UX Design
                </li>
                <li className="footer_two_services_list_item">
                  <Arrowleft className="footer_list_icon" />
                  Management
                </li>
                <li className="footer_two_services_list_item">
                  <Arrowleft className="footer_list_icon" />
                  Digital Marketing
                </li>
                <li className="footer_two_services_list_item">
                  <Arrowleft className="footer_list_icon" />
                  Blog News
                </li>
              </ul>
            </div>
            <div className="footer_two_gallery">
              <h4 className="footer_two_services_heading">Gallery</h4>
              <div className="footer_two_gallery_container">
                <img src={Galleryone} className="footer_two_picture" />
                <img src={Gallerytwo} className="footer_two_picture" />
                <img src={Gallerythree} className="footer_two_picture" />
                <img src={Galleryfour} className="footer_two_picture" />
                <img src={Galleryfive} className="footer_two_picture" />
                <img src={Gallerysix} className="footer_two_picture" />
              </div>
            </div>
            <div className="footer_two_subscribe">
              <h4 className="footer_two_services_heading">Subscribe</h4>
              <input type="email" name="email" placeholder="Enter your email:" />
              <Button className="btn--secondary footer_two_button">
                SUBSCRIBE NOW
              </Button>
            </div>
          </section>
        </main>
        <section className="footer_three">
          <p className="footer_three_note">
            Copyright &#64; 2024 <span>edunity</span> | | All Rights Reserved
          </p>
        </section>
      </footer>
    </>
  );
}
