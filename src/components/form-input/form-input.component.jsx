import "./form-input.styles.scss";

const FormInput = ({ labelFor, label, ...otherProps }) => {
  return (
    <div className="group" key={labelFor}>
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          htmlFor={labelFor}
          className={` ${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
