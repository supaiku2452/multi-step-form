import React, { createContext, useReducer } from "react";

type FormValueType = {
  name: string;
  age: number;
  email: string;
};

const initialValue: FormType = {
  value: { name: "", age: 20, email: "" },
};

type FormError = Partial<FormValueType>;
type FormType = {
  value: FormValueType;
  error?: FormError;
};

type FormContextType = {
  state: FormType;
  dispatch: React.Dispatch<FormAction>;
};

// context
const FormContext = createContext<FormContextType>(undefined);

const FormProvider: React.FC = ({ children }) => {
  const value = useFormReducer();
  return (
    <FormContext.Provider value={{ ...value }}>{children}</FormContext.Provider>
  );
};

// reducer
type FormAction = FormName | FormAge | FormEmail;
type FormName = {
  type: "name";
  payload: string;
};
type FormAge = {
  type: "age";
  payload: number;
};
type FormEmail = {
  type: "email";
  payload: string;
};

const formReducer = (state: FormType, action: FormAction): FormType => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        value: {
          ...state.value,
          name: action.payload,
        },
      };
    case "age":
      return {
        ...state,
        value: {
          ...state.value,
          age: action.payload,
        },
      };
    case "email":
      return {
        ...state,
        value: {
          ...state.value,
          email: action.payload,
        },
      };
    default:
      return state;
  }
};

const useFormReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialValue);
  return {
    state,
    dispatch,
  };
};

export { FormContext, FormProvider };
