import { useState } from "react";
import avo from "../images/avo3.png";
import guac from "../images/guac.png";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const APPEAR = "mole-img";
const HIDE = "mole-img hidden-mole";

export default function Mole({ display, setScore, ongoing }) {
  const [img, setImg] = useState(avo);
  const onClick = () => {
    if (!ongoing) return;
    if (img === avo) {
      setImg(guac);
      setScore((prev) => prev + 5);
      delay(750).then((_) => {
        setImg(avo);
      });
    }
  };
  return (
    <div className="mole">
      <img
        className={img === avo ? display : APPEAR}
        src={img}
        alt="avocado"
        onClick={onClick}
      />
    </div>
  );
}
