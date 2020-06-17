import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

type FormValueType = {
  name: string;
  age: number;
  email: string;
};

const initialValue: FormValueType = {
  name: "",
  age: 20,
  email: "",
};

type FormContextType = {
  state: FormValueType;
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

const formReducer = (
  state: FormValueType,
  action: FormAction
): FormValueType => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "age":
      return {
        ...state,
        age: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
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
