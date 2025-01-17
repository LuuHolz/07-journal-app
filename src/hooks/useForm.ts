import { useEffect, useMemo, useState } from "react";

const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidations] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    }

    setFormValidations(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    ...formValidation,
    isFormValid: useMemo(() => {
      for (const formValue of Object.keys(formValidation)) {
        if (formValidation[formValue] !== null) return false;
      }
      return true;
    }, [formValidation])
  };
};

export { useForm };
