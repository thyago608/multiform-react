import { createContext, useReducer, ReactNode } from "react";

//Tipo do Estado do Reducer
type State = {
  currentStep: number;
  email: string;
  github: string;
  name: string;
  level: 0 | 1;
};

//Ação que será utilizada no Reducer
type Action = {
  type: FormActions;
  payload: any;
};

//Estado inicial do Reducer
const initialDataReducer: State = {
  currentStep: 0,
  email: "",
  github: "",
  name: "",
  level: 0,
};

//Tipagem do Contexto
type FormContextProps = {
  state: State;
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
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const FormReducer = (state: State, action: Action) => {
  switch (action.type){ 
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
