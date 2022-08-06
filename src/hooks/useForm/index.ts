import { useState } from "react";

const useForm = <T>(initValue: T) => {
  const [values, setValues] = useState(initValue);
  const handelChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handelChange,
  };
};

export default useForm;
