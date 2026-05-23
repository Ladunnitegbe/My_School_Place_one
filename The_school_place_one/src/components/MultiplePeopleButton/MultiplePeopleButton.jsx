import "./MultiplePeopleButton.css";


export function MultiplePeopleButton({
  count = "10k+",
  label = "Students",
  image,
  className,
  onClick,
}) {
  return (
   <div className={`MultiplePeopleButton ${className ?? ""}`}>
      <div className="MultiplePeopleButton_wrapper">
        <div className="MultiplePeopleButton_content">
        <h4>{count}</h4>
        <h4>{label}</h4>
      </div>

      <img
       src={image}
        alt={label}
        className="MultiplePeopleButton_image"
      />
      </div>
   </div>
  );
}

