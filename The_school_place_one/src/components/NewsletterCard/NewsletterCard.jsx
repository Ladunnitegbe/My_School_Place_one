import "./NewsletterCard.css";
import Calender from "../../assets/images/newsletter_images/calender.svg?react";
import Comment from "../../assets/images/newsletter_images/comment.svg?react";
import Button from "../Button/Button.jsx";

export function NewsletterCard({
  image,
  date = "15 April 2024",
  comment = "Comments (06)",
  contentTitle = "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
  className,
}) {
  return (
    <>
      <article className="newsletter_card">
        <img src={image} alt="Newsletter" className="newsletter_card_image" />
        <div className="newsletter_card_info">
          <Calender className="newsletter_card_calender_icon" />
          <span className="newsletter_card_date">{date}</span>
          <Comment className="newsletter_card_comment_icon" />
          <span className="newsletter_card_comment">{comment}</span>
        </div>
        <h3 className="newsletter_card_content_title">{contentTitle}</h3>
        <Button className="newsletter_card_button btn--secondary">
          Read More
        </Button>
      </article>
    </>
  );
}
