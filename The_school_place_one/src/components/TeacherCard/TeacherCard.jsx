import "./TeacherCard.css";
import Shareicon from "../../assets/images/teacher_images/shareicon.svg?react";

export function TeacherCard({
  name = "John Donovan",
  title = "Teacher",
  image,
  className,
}) {
  return (
    <article className={`teacher_card ${className ?? ""}`}>
      <img src={image} alt={name} className="teacher_card_photo" />
      <Shareicon className="share-icon" />
      <div className="teacher_card_info">
        <h3 className="teacher_card_name">{name}</h3>
        <p className="teacher_card_title">{title}</p>
      </div>
    </article>
  );
}
