import { useDispatch } from "react-redux";
import { SETIMAGEURL } from "../../store/actions/actions-type";
import styles from "./ImageCardDesigne.module.css";

const ImageCardDesigne = ({ imageUrl }) => {
  const dispatch = useDispatch();
  const imageHandleChange = (event) => {
    dispatch({ type: SETIMAGEURL, payload: event.target.src });
  };

  return (
    <div className={styles.imageCardDesigne} onClick={imageHandleChange}>
      <img className={styles.designeImage} src={imageUrl} alt="" />
    </div>
  );
};

export default ImageCardDesigne;
