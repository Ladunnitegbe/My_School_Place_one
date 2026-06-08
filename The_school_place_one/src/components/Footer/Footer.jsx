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
    <footer className="footer">
      <main className="footer_main">

        {/* ── Row 1: Contact Info Bar ── */}
        <address className="footer_one">
          <div className="footer_address">
            <div className="footer_one_icon_wrapper">
              <Locationfooter />
            </div>
            <div className="footer_address_details">
              <h5 className="footer_one_heading">Address:</h5>
              <h3 className="footer_one_address_value">Lagos, Nigeria</h3>
            </div>
          </div>

          <div className="vertical_line" />

          <div className="footer_address">
            <div className="footer_one_icon_wrapper">
              <Phone />
            </div>
            <div className="footer_address_details">
              <h5 className="footer_one_heading">Phone:</h5>
              <h3 className="footer_one_address_value">(+234) 808 784 568</h3>
            </div>
          </div>

          <div className="vertical_line" />

          <div className="footer_address">
            <div className="footer_one_icon_wrapper">
              <Email />
            </div>
            <div className="footer_address_details">
              <h5 className="footer_one_heading">Email:</h5>
              <h3 className="footer_one_address_value">myschoolplace@gmail.com</h3>
            </div>
          </div>
        </address>

        {/* ── Row 2: Four Columns ── */}
        <section className="footer_two">

          {/* Col 1 — Brand + Social */}
          <div className="footer_two_socialmedia_section">
            <img
              src={TheSchoolPlaceLogo}
              alt="Edunity logo"
              className="footer_two_logo"
            />
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

          {/* Col 2 — Services */}
          <div className="footer_two_services">
            <h4 className="footer_two_services_heading">Our Services:</h4>
            <ul className="footer_two_services_list">
              <li className="footer_two_services_list_item">
                <Arrowleft className="footer_list_icon" />
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

          {/* Col 3 — Gallery */}
          <div className="footer_two_gallery">
            <h4 className="footer_two_services_heading">Gallery</h4>
            <div className="footer_two_gallery_container">
              <img src={Galleryone} alt="Gallery 1" className="footer_two_picture" />
              <img src={Gallerytwo} alt="Gallery 2" className="footer_two_picture" />
              <img src={Gallerythree} alt="Gallery 3" className="footer_two_picture" />
              <img src={Galleryfour} alt="Gallery 4" className="footer_two_picture" />
              <img src={Galleryfive} alt="Gallery 5" className="footer_two_picture" />
              <img src={Gallerysix} alt="Gallery 6" className="footer_two_picture" />
            </div>
          </div>

          {/* Col 4 — Subscribe */}
          <div className="footer_two_subscribe">
            <h4 className="footer_two_services_heading">Subscribe</h4>
            <input
              type="email"
              name="email"
              placeholder="Enter your email:"
            />
            <Button className="btn--secondary footer_two_button">
              SUBSCRIBE NOW
            </Button>
          </div>

        </section>
      </main>

      {/* ── Copyright Bar ── */}
      <section className="footer_three">
        <p className="footer_three_note">
          Copyright &#64; 2026 <span>My School Place</span> | All Rights Reserved
        </p>
      </section>
    </footer>
  );
}
