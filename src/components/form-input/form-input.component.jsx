import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ labelFor, label, ...otherProps }) => {
  return (
    <Group key={labelFor}>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel htmlFor={labelFor} shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
