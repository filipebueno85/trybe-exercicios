// /src/hooks/useFormInput.js

import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange({target}) {
    const { value } =  target;
    setValue(value);
  }

  function clear() {
    setValue('');
  }

  return {
    value: value,
    onChange: handleChange,
    clear,
  };
}

export default useFormInput;
