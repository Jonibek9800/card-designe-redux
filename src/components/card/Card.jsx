import { useSelector } from "react-redux";
import styles from "./Card.module.css";

const Card = () => {
  const { color, personName, imageUrl } = useSelector((state) => state.designe);
  return (
    <div style={{ backgroundColor: color }} className={styles.card}>
      <img className={styles.cardImage} src={imageUrl} alt="" />
      <p className={styles.personName}>{personName}</p>
    </div>
  );
};

export default Card;
