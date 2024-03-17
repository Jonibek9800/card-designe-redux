import { useSelector } from "react-redux";

const MyInput = ({ styles, name, type, onChange }) => {
  const { color, personName } = useSelector((state) => state.designe);

  return (
    <input
      className={styles}
      name={name}
      type={type}
      value={type == "color" ? color : personName}
      onChange={onChange}
    />
  );
};

export default MyInput;
