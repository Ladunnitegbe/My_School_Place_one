import "./TestimonialCard.css";

import Starrating from "../../assets/images/testimonials_images/stars.svg?react";

export function TestimonialCard({
  name = " John Sonovan",
  designation = "CEO at WebTech",
  image,
  className,
}) {
  return (
    <>
      <article className={`testimonial_card ${className ?? ""}`}>
        <div className="testimonial_card_wrapper">
          <Starrating className="testimonial_card_stars" />
          <p className="testimonial_card_paragraph">
            “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim
            enim. Amet consectetur adipiscing”
          </p>

          <div className="testimonial_card_authorinfo">
            <img
              src={image}
              alt={designation}
              className="testimonial_card_image"
            />

            <div className="testimonial_card_content">
              <h4 className="testimonial_card_name">{name}</h4>
              <h5 className="testimonial_card_designation">{designation}</h5>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
