// src/hooks/useForm.ts

import { useState } from 'react';

type UseFormReturn<T> = {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  reset: () => void;
  setValues: React.Dispatch<React.SetStateAction<T>>;
};

/**
 * useForm<T>()
 * Manages simple form state for inputs and textareas.
 */
export function useForm<T extends Record<string, any>>(initialValues: T): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset, setValues };
}
