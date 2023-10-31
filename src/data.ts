import sedanIcon from "./assets/icon-sedans.svg";
import suvIcon from "./assets/icon-suvs.svg";
import luxuryIcon from "./assets/icon-luxury.svg";

const data = [
  {
    id: 1,
    icon: sedanIcon,
    title: "Sedans",
    itemColor: "hsl(31, 77%, 52%)",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    id: 2,
    icon: suvIcon,
    title: "SUVs",
    itemColor: "hsl(184, 100%, 22%)",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    id: 3,
    icon: luxuryIcon,
    title: "Luxury",
    itemColor: "hsl(179, 100%, 13%)",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

export default data;
