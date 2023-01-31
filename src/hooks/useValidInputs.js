import { useState } from 'react';

function useValidInputs(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [message, setMessage] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function validateField() {
    if (inputValue === '') {
      setMessage('Preencha todos os campos!');
      return message;
    }
    setMessage('');
  }

  return { handleChange, inputValue, validateField, message };
}

export default useValidInputs;
