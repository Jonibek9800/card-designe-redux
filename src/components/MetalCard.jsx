import { createContext } from "react";
import Card from "./card/Card";
import ImageCardDesigne from "./image-card-designe/ImageCardDesigne";
import MyInput from "./UI/my-input/MyInput";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SETCOLOR, GETIMAGES, SETPERSONNAME } from "../store/actions/actions-type";
import { useSelector } from "react-redux";

export const Context = createContext();

const MetalCard = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);

  const getImages = async () => {
    try {
      const response = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
      );
      dispatch({ type: GETIMAGES, payload: response.data.photos });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "color") {
      dispatch({ type: SETCOLOR, payload: event.target.value });
    } else {
      dispatch({ type: SETPERSONNAME, payload: event.target.value });
    }
  };

  return (
    <>
      {images.length !== 0 ? (
        <div className="container">
          <div className="designe-container">
            <div className="image-designe-name">Выберите свой дизайн</div>
            <div className="image-desine">
              {images.map((image) => {
                return <ImageCardDesigne key={image.id} imageUrl={image.url} />;
              })}
            </div>
          </div>

          <div className="card">
            <div className="color-designe">
              <label htmlFor="color-change">Цвет:</label>
              <MyInput
                styles="color-change"
                name="color"
                type="color"
                onChange={handleChange}
              />
            </div>
            <div className="person-name-container">
              <label htmlFor="person-name">Имя:</label>
              <MyInput
                styles="person-name"
                name="personName"
                type="text"
                onChange={handleChange}
              />
            </div>
            <Card />
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default MetalCard;
