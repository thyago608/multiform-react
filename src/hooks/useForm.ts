import { useContext } from "react";
import { FormContext } from "../context/FormContex";

export function useForm() {
  const context = useContext(FormContext);

  return context;
}
