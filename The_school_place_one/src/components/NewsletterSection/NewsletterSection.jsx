import "./NewsletterSection.css";
import { NewsletterCard } from "../NewsletterCard/NewsletterCard.jsx";
import NewsletterImageOne from "../../assets/images/newsletter_images/newsletter-pic-one.png";
import NewsletterImageTwo from "../../assets/images/newsletter_images/newsletter-pic-two.png";
import NewsletterImageThree from "../../assets/images/newsletter_images/newsletter-pic-three.png";
import Bookicon from "../../assets/images/about_us_images/bookicon.svg?react";
import Birdsontree from "../../assets/images/hero_images/birdsontree.png";
import Redarc from "../../assets/images/newsletter_images/redarc.svg?react";
import Button from "../Button/Button.jsx";
export function NewsletterSection() {
  return (
    <>
     <Redarc className="redarc"/>
     <aside className=" newsletter_section_aside side_image">
                  <img
                    src={Birdsontree}
                    alt="Birds on Tree"
                    className="newsletter_section_leftside_image"
                  />
                </aside>
      <section className="newsletter_section">
        
        
               
        <main className="newsletter_section_main_content">
          <div className="about_us_article_title">
            <Bookicon className="about_us_article_title_icon" />
            <h5 className="about_us_article_title_text">EXPLORE NEWSLETTER</h5>
          </div>
          <h3 className="newsletter_section_heading">Most Popular Post.</h3>
          <Button className="newsletter_section_button btn--primary">All Blog Post</Button>
          <div className="newsletter_section_cards_wrapper">
            <NewsletterCard image={NewsletterImageOne} />
            <NewsletterCard image={NewsletterImageTwo} />
            <NewsletterCard image={NewsletterImageThree} />
          </div>
        </main>
      </section>
    </>
  );
}
