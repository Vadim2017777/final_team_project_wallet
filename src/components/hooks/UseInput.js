import {useState} from 'react';
import useValidation from './UseValidation.js';

const useInput = (intialValue, validations) => {
  const [value, setValue] = useState(intialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setDirty(true);
  };

  return {value, onChange, onBlur, isDirty, ...valid};
};

export default useInput;
