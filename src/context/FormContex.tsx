import { createContext, useReducer, ReactNode } from "react";

//Tipo da informação do Reducer
type StateReducer = {
  currentStep: number;
  email: string;
  github: string;
  name: string;
  level: 0 | 1;
};

//Estado inicial do Reducer
const initialDataReducer: StateReducer = {
  currentStep: 0,
  email: "",
  github: "",
  name: "",
  level: 0,
};

//Tipagem do Contexto
type FormContextProps = {
  state: StateReducer;
  dispatch: (action: Action) => void;
};

//Tipagem do Provider
type FormContextProvider = {
  children: ReactNode;
};

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

//Tipos de ações
enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

type Action = {
  type: FormActions;
  payload: any;
};

const FormReducer = (state: StateReducer, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };

    case FormActions.setName:
      return { ...state, name: action.payload };

    case FormActions.setLevel:
      return { ...state, level: action.payload };

    case FormActions.setEmail:
      return { ...state, email: action.payload };

    case FormActions.setGithub:
      return { ...state, github: action.payload };

    default:
      return state;
  }
};

export function FormContextProvider({ children }: FormContextProvider) {
  const [state, dispatch] = useReducer(FormReducer, initialDataReducer);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
