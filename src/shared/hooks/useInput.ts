import { ChangeEvent, useState } from "react";

interface useInputProps {
  initialValue: string;
  validator?: (value: string) => boolean;
}

export const useInput = (props: useInputProps) => {
  const { initialValue, validator } = props;
  const [value, setValue] = useState<string>(initialValue);
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (validator) {
      setIsValid(validator(newValue));
    }
  };

  const resetValue = () => {
    setValue(initialValue);
    setIsValid(true);
  };

  return {
    value,
    onChange: handleChange,
    resetValue,
    isValid, 
  };
};