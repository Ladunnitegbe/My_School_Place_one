import "./AboutUs.css";
import Cloud from "../../assets/images/hero_images/cloud.png";
import MultiplePeople from "../../assets/images/hero_images/multiplepeople.png";
import AboutboyOne from "../../assets/images/about_us_images/about-us-image-one.png";
import AboutboyTwo from "../../assets/images/about_us_images/about-us-image-two.png";
import Birdsontreeright from "../../assets/images/about_us_images/birds-on-tree-right.png";
import Bookicon from "../../assets/images/about_us_images/bookicon.svg?react";
import Tick from "../../assets/images/about_us_images/tick.svg?react";
import { MultiplePeopleButton } from "../MultiplePeopleButton/MultiplePeopleButton.jsx";
import Button from "../Button/Button.jsx";

export function AboutUs() {
  return (
    <>
      <section className="about_us_section">
        <div className="red_dot"></div>
        <div className="orange_dot"></div>
        <div className="aqua_dot"></div>

        <aside className="about_us_section_aside side_image">
          <img src={Cloud} alt="Cloud" className="about_us_leftside_image" />
        </aside>
        <main className="about_us_main_content">
          <MultiplePeopleButton
            count="Happy"
            label="Student"
            image={MultiplePeople}
            disabled
            className="about_us_multiplepeople"
          />
          <div className="about_us_main_image_one_wrapper">
            <img
              src={AboutboyOne}
              alt="Boy with bricks"
              className="about_us_main_image_one"
            />
          </div>
          <div className="about_us_main_image_two_wrapper">
            <img
              src={AboutboyTwo}
              alt="Boy with yellow shirt"
              className="about_us_main_image_two"
            />
          </div>
          <article className="about_us_article">
            <div className="about_us_article_title">
              <Bookicon className="about_us_article_title_icon" />
              <h5 className="about_us_article_title_text">
                ABOUT US
              </h5>
            </div>
            <h2 className="about_us_article_heading">
              It's our passion to work with children at <span>kindergarten.</span>
            </h2>
            <p className="about_us_article_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud..
            </p>
            <ul className="about_us_article_tags_wrapper">
                        <li><div className="about_us_article_tags">
                            <Tick className="about_us_article_tags_icon"/>
                        QUALITY EDUCATORS
                        </div>
                        </li>

                        <li><div className="about_us_article_tags">
                            <Tick className="about_us_article_tags_icon"/>
                        PLAY TO LEARN
                        </div>
                        </li>
                        <li><div className="about_us_article_tags">
                            <Tick className="about_us_article_tags_icon"/>
                        SAFETY AND SECURITY
                        </div>  
                        </li>
                        <li><div className="about_us_article_tags">
                            <Tick className="about_us_article_tags_icon"/>
                        HOMELIKE ENVIROMENT
                        </div>
                        </li>
            </ul>
            <Button className="btn--primary about_us__button">
                Admission Open
            </Button>
          </article>
        </main>
        <aside className="about_us_section_aside side_image">
          <img
            src={Birdsontreeright}
            alt="Birds on Tree"
            className="about_us_rightside_image"
          />
        </aside>
      </section>
    </>
  );
}
