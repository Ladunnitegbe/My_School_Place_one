import "./PageNavigation.css";
import TheSchoolPlaceLogo from "../../assets/images/PageNavigation_images/theschoolplacemlogo.png";
import Search from "../../assets/images/PageNavigation_images/Search.svg?react";
import PersonIcon from "../../assets/images/PageNavigation_images/PersonIcon.svg?react";
import ArrowDownDark from "../../assets/images/PageNavigation_images/ArrowDownDark.svg?react";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";



export function PageHeader() {
    const navigate = useNavigate(); 
  return (
    <>
    <section className="page-header">
        <div className="page-header_logo">
            <img src={TheSchoolPlaceLogo} className="page-header_logo__icon"/>
        </div>
        <div className="page-header_links">
            {/* <a href="#" className="page-header___link">Home </a> */}
            <button className=" page-header___link btn-outline" onClick={() => navigate("/")}>
                Home
                <ArrowDownDark className="page-header___link___icon" />
            </button>
            <button className="page-header___link btn-outline" onClick={() => navigate("/about-us")}>
                About Us
            </button>
            <button className="page-header___link btn-outline" onClick={() => navigate("/courses")}>
                Courses
                <ArrowDownDark className="page-header___link___icon" />
            </button>
            <button className="page-header___link btn-outline" onClick={() => navigate("/pages")}>
                Pages
                <ArrowDownDark className="page-header___link___icon" />
            </button>
            <button className="page-header___link btn-outline" onClick={() => navigate("/blog")}>
                Blog
                <ArrowDownDark className="page-header___link___icon" />
            </button>
            <button className="page-header___link btn-outline" onClick={() => navigate("/contact")}>
                Contact
            </button>
            
        </div>
        <div className="page-header_contact">
            <Search className="page-header_contact___icon search" />
            <PersonIcon className="page-header_contact___icon personicon" />
            <Button className="btn--primary page-header_contact___button">Contact</Button>
        </div>

    </section>
    </>
  );
}