// React
import React, { useState, useCallback } from "react";

const useAuthInput = <T>(defaultValue: T) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }, []);

  return [inputValue, onChange];
};

export default useAuthInput;
