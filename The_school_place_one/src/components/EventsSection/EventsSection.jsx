import "./EventsSection.css";
import Birdsontree from "../../assets/images/hero_images/birdsontree.png";
import Waves from "../../assets/images/events_section_images/waves.png";
import Girlinclass from "../../assets/images/events_section_images/girlinclass.png";
import Littlecar from "../../assets/images/events_section_images/littlecar.png";
import Oilsplash from "../../assets/images/events_section_images/oilsplash.png";
import Rainbow from "../../assets/images/events_section_images/rainbow.png";
import Bookicon from "../../assets/images/about_us_images/bookicon.svg?react";
import Redtick from "../../assets/images/events_section_images/redtick.svg?react";
import Button from "../Button/Button.jsx";

export function EventsSection() {
  return (
    <>
      <section className="events_section">
        <aside className="events_section_aside side_image">
          <img
            src={Birdsontree}
            alt="Birds on Tree"
            className="events_section_leftside_image"
          />
        </aside>

        <main className="events_section_main_content">
          <article className="events_section_content">
            <img src={Littlecar} alt="Little car" className="Littlecar" />

            <div className="events_section_article_title">
              <Bookicon className="events_section_article_title_icon" />
              <h5 className="events_section_article_title_text">WHY CHOOSE US</h5>
            </div>
            <h2 className="events_section_article_heading">
              new approach to fun
            </h2>
            <p className="events_section_article_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <ul className="events_section_article_tags_wrapper">
              <li>
                <div className="events_section_article_tags">
                  <Redtick className="events_section_article_tags_icon" />
                  Best Teaching
                </div>
              </li>
              <li>
                <div className="events_section_article_tags">
                  <Redtick className="events_section_article_tags_icon" />
                  Quality Educators
                </div>
              </li>
              <li>
                <div className="events_section_article_tags">
                  <Redtick className="events_section_article_tags_icon" />
                  Expert Tutor
                </div>
              </li>
              <li>
                <div className="events_section_article_tags">
                  <Redtick className="events_section_article_tags_icon" />
                  Affordable
                </div>
              </li>
            </ul>
            <Button className="btn--secondary events_section__button">
              Find Events
            </Button>
            <img src={Rainbow} alt="rainbow" className="rainbow" />
          </article>

          <div className="events_section_images">
            <img src={Oilsplash} alt="Oil splash" className="oilsplash" />
            <img
              src={Girlinclass}
              alt="A girl in a classroom"
              className="girlinclass"
            />
          </div>
        </main>

        <aside className="events_section_aside side_image">
          <img
            src={Waves}
            alt="Waves"
            className="events_section_rightside_image"
          />
        </aside>
      </section>
    </>
  );
}
