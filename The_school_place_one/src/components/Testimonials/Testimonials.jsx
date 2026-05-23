import "./Testimonials.css";
import { TestimonialCard } from "../TestimonialCard/TestimonialCard.jsx";
import Cloud from "../../assets/images/hero_images/cloud.png";
import Parentone from "../../assets/images/testimonials_images/parentone.png";
import Parenttwo from "../../assets/images/testimonials_images/parenttwo.png";
import Bookicon from "../../assets/images/about_us_images/bookicon.svg?react";
import Smilingsun from "../../assets/images/hero_images/smilingsun.png";

export function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <aside className="testimonials_aside side_image">
          <img src={Cloud} alt="Cloud" className="testimonials_leftside_image" />
        </aside>
        <main className="testimonials_main_content">
          <div className="about_us_article_title">
            <Bookicon className="about_us_article_title_icon" />
            <h5 className="about_us_article_title_text">TESTIMONIAL</h5>
          </div>

          <h2 className="testimonials_heading">What Parents Say</h2>
          <div className="testimonials_wrapper">
            <TestimonialCard
              name="Kathy Sullivan"
              designation="CEO at ordian it"
              image={Parentone}
            />
            <TestimonialCard
              name="Elsie Stroud"
              designation="CEO at Edwards"
              image={Parenttwo}
            />
            <TestimonialCard
              name="Kathy Sullivan"
              designation="CEO at ordian it"
              image={Parentone}
            />
          </div>
        </main>
        <aside className="testimonials_aside side_image">
          <img src={Smilingsun} alt="Smiling Sun" className="testimonials_rightside_image" />
        </aside>
      </section>
    </>
  );
}
