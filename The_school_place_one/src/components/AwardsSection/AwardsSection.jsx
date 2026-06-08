import "./AwardsSection.css";

import Teachericon from "../../assets/images/awards_section_images/teachericon.svg?react";
import Shakinghands from "../../assets/images/awards_section_images/shakinghands.svg?react";
import Classroompeople from "../../assets/images/awards_section_images/classroompeople.svg?react";
import Awardsicon from "../../assets/images/awards_section_images/awardsicon.svg?react";
import Linestar from "../../assets/images/awards_section_images/linestar.svg?react";
import AwardBackground from "../../assets/images/awards_section_images/Background.png";

export function AwardsSection() {
  return (
    <>   
    
    <section className="awards_section">
        <img
                        src={AwardBackground}
                        alt="Background showing kids playing"
                        className="award_background"
                      />
      <Linestar className="awards_section_linestar_icon" />
      
        <div className="awards_section_content_wrapper">
            <article className="awards_section_article">
                <div className="awards_section_article_icon_wrapper_dashed">
                    <div className="awards_section_article_icon_wrapper">
                        <Teachericon className="awards_section_article_icon" />
                    </div>
                </div> 
                <h3 className="awards_section_article_value">2500</h3> 
                <h5 className="awards_section_article_heading">Total Teacher</h5>
            </article>
            <article className="awards_section_article">
                <div className="awards_section_article_icon_wrapper_dashed">
                    <div className="awards_section_article_icon_wrapper">
                        <Shakinghands className="awards_section_article_icon" />
                    </div>
                </div> 
                <h3 className="awards_section_article_value">5000</h3> 
                <h5 className="awards_section_article_heading">Total Student</h5>
            </article>
            <article className="awards_section_article">
                <div className="awards_section_article_icon_wrapper_dashed">
                    <div className="awards_section_article_icon_wrapper">
                        <Classroompeople className="awards_section_article_icon" />
                    </div>
                </div> 
                <h3 className="awards_section_article_value">350</h3> 
                <h5 className="awards_section_article_heading">Total Classroom</h5>
            </article>
            <article className="awards_section_article awards_section_article_four">
                <div className="awards_section_article_icon_wrapper_dashed">
                    <div className="awards_section_article_icon_wrapper">
                        <Awardsicon className="awards_section_article_icon" />
                    </div>
                </div> 
                <h3 className="awards_section_article_value">1200</h3> 
                <h5 className="awards_section_article_heading">Total Awards Won</h5>
            </article>
        </div>
    </section>

    </>
 );
    
}