import { Routes } from "./routes";
import { FormContextProvider } from './context/FormContext';
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <FormContextProvider>
      <Routes />
      <GlobalStyles />
    </FormContextProvider>
  );
}

export default App;
