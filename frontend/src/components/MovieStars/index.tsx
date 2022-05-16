import { ReactComponent as StarFull } from "assets/img/star-full-icon.svg";
import { ReactComponent as StarHalf } from "assets/img/star-half-icon.svg";
import { ReactComponent as StarEmpty } from "assets/img/star-empty-icon.svg";
import "./styles.css";

export default function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
