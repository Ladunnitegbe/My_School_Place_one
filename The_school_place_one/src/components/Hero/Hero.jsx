import "./Hero.css";
import Birdsontree from "../../assets/images/hero_images/birdsontree.png";
import Smilingsun from "../../assets/images/hero_images/smilingsun.png";
import Play from "../../assets/images/hero_images/Play.svg?react";
import Cross from "../../assets/images/hero_images/cross.png";
import Cloud from "../../assets/images/hero_images/cloud.png";
import Threemarks from "../../assets/images/hero_images/threemarks.png";
import LittleBoy from "../../assets/images/hero_images/herolittleboy.png";
import MultiplePeople from "../../assets/images/hero_images/multiplepeople.png";
import LittleGirl from "../../assets/images/hero_images/herolittlegirl.png";
import { MultiplePeopleButton } from "../MultiplePeopleButton/MultiplePeopleButton.jsx";
import Button from "../Button/Button.jsx";

export function Hero() {
  return (
    <>
      <section className="hero">
        <aside className="aside side_image">
          <img
            src={Birdsontree}
            alt="Birds on Tree"
            className="leftside_image"
          />
        </aside>

        <main className="hero_main_content">
          <img
            src={Cross}
            alt="Cross"
            className="hero_main_content__title___crossicon"
          />
          <img src={Cloud} alt="Cloud" className="cloudimage" />
          <img
            src={Threemarks}
            alt="Three Marks"
            className="three_marks_image"
          />

          <div className="hero_main_content__title">
            <div className="hero_main_content__title___header_container">
              <h1 className="hero_main_content__title___header">
                The Best Place TO Learn and Play For Kids
              </h1>
            </div>

            <p className="hero_main_content__title___paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="hero_main_content__title_button_wrapper">
              <Button className="btn--primary hero_main_content__title___button">
                Browse Courses
              </Button>
              <Button className="btn--secondary hero_main_content__title___button playbutton">
                <Play className="hero_main_content__title___button___icon" />
              </Button>
              <span className="littlebluecircletwo"></span>
              <span className="littlebluecircle"></span>
              <a href="#" className="hero_main_content__title___link">
                Watch Now
              </a>
            </div>
          </div>

          <div className="hero_main_content__topimage__wrapper">
            <div className="hero_main_content__topimage__wrapper__orange">
              <img
                src={LittleBoy}
                alt="Little Boy"
                className="little_boy_image"
              />
            </div>
            <MultiplePeopleButton
              count="10k+"
              label="Student"
              image={MultiplePeople}
              disabled
              className="hero_main_content__topimage__wrapper__studentsinfo"
            />
          </div>

          <div className="hero_main_content__bottomimage__wrapper">
            <div className="hero_main_content__bottomimage__wrapper__coursesinfo">
              <div className="coursesinfo_count">
                <h3>5.8k</h3>
                <h5>Success Courses</h5>
              </div>
            </div>
            <div className="hero_main_content__bottomimage__wrapper_blue">
              <img
                src={LittleGirl}
                alt="Little Girl"
                className="little_girl_image"
              />
            </div>
          </div>
        </main>

        <aside className="aside side_image">
          <img src={Smilingsun} alt="Smiling Sun" className="rightside_image" />
          <img src={Cross} alt="Cross" className="rightside_image__crossicon" />
        </aside>
      </section>
    </>
  );
}
