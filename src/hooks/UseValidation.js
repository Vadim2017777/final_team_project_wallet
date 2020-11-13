import {useEffect} from 'react';
import {useState} from 'react';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLength) {
      setInputValid(false);
    } else setInputValid(true);
  }, [isEmpty, minLength]);

  return {isEmpty, minLength, inputValid};
};

export default useValidation;
