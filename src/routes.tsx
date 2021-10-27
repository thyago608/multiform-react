import { BrowserRouter, Route } from "react-router-dom";
import { FormStepOne } from "./pages/FormStepOne";
import { FormStepTwo } from "./pages/FormStepTwo";
import { FormStepThree } from "./pages/FormStepThree";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormStepOne} />
      <Route path="/steptwo" exact component={FormStepTwo} />
      <Route path="/stepthree" exact component={FormStepThree} />
    </BrowserRouter>
  );
}
