import PropTypes from "prop-types";
import style from "./Input.module.css";

export default function Input({ type, placeholder, name, required, onChange }) {
  if (required === "false") {
    return (
      <div className={style.inputDiv}>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          className={style.input}
        />
      </div>
    );
  }
  return (
    <div className={style.inputDiv}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={style.input}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.string,
};
