import { useState } from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  itemColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, itemColor }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <section style={{ backgroundColor: itemColor }} className="card">
      <img className="card__image" src={icon} alt={title} />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: isHovering ? "#fff" : itemColor }}
        className="card__button"
      >
        Learn More
      </button>
    </section>
  );
};
export default Card;
