import "./TeacherSection.css";
import { TeacherCard } from "../TeacherCard/TeacherCard.jsx";
import Teacherone from "../../assets/images/teacher_images/teacherone.png";
import Teachertwo from "../../assets/images/teacher_images/teachertwo.png";
import Teacherthree from "../../assets/images/teacher_images/teacherthree.png";
import Teacherfour from "../../assets/images/teacher_images/teacherfour.png";
import Bookicon from "../../assets/images/about_us_images/bookicon.svg?react";
import Arrowback from "../../assets/images/teacher_images/arrowback.svg?react";
import Arrowforward from "../../assets/images/teacher_images/arrowforward.svg?react";
import Birdsontreeright from "../../assets/images/about_us_images/birds-on-tree-right.png";

export function TeacherSection() {
  return (
    <>
      <section className="teacher_section">
        <main className="teacher_section_main_content">
          <div className="about_us_article_title">
            <Bookicon className="about_us_article_title_icon" />
            <h5 className="about_us_article_title_text">TEACHER</h5>
          </div>
          <Arrowback className="teacher_section_arrowback" />
          <Arrowforward className="teacher_section_arrowforward" />
          <h2 className="teacher_section_heading">Meet Our Instructors</h2>
          <div className="teacher_cards_wrapper">
            <TeacherCard
              name="Cheryl Curry"
              title="Teacher"
              image={Teacherone}
            />
            <TeacherCard
              name="Willie Diaz"
              title="Teacher"
              image={Teachertwo}
            />
            <TeacherCard
              name="Jimmy Sifuentes"
              title="Teacher"
              image={Teacherthree}
            />
            <TeacherCard
              name="Micheal Hammond"
              title="Teacher"
              image={Teacherfour}
            />
          </div>
        </main>
        <aside className="teacher_section_aside side_image">
          <img
            src={Birdsontreeright}
            alt="Birds on Tree"
            className="teacher_section_rightside_image"
          />
        </aside>
      </section>
    </>
  );
}
