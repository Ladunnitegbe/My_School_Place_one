import "./CardsSection.css";
import Abcblocks from "../../assets/images/card_images/Abcblocks.svg?react";
import Teachingteacher from "../../assets/images/card_images/Teachingteacher.svg?react";
import Building from "../../assets/images/card_images/Building.svg?react";

export function CardsSection() {
  return (
    <>
      <section className="cards_section">
        <article className="cards cardone">
          <div className="cards_icon_container">
            <Abcblocks className="cards_icon" />
          </div>
          <h3 className="cards_title">START COURSE</h3>
          <p className="cards_paragraph">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum
            dolore fugiat nulla pariatur. Excepteur
          </p>
        </article>
        <article className="cards cardtwo">
          <div className="cards_icon_container">
            <Teachingteacher className="cards_icon" />
          </div>
          <h3 className="cards_title">EXPERT TEACHERS</h3>
          <p className="cards_paragraph">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum
            dolore fugiat nulla pariatur. Excepteur
          </p>
        </article>
        <article className="cards cardthree">
          <div className="cards_icon_container">
            <Building className="cards_icon" />
          </div>
          <h3 className="cards_title">STRATEGIC LOCATION</h3>
          <p className="cards_paragraph">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum
            dolore fugiat nulla pariatur. Excepteur
          </p>
        </article>
      </section>
    </>
  );
}
