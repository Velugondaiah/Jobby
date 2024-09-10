import { BrowserRouter, Route, Switch  } from "react-router-dom";

import LoginFrom from "./components/LoginFrom";
import RegisterFrom  from "./components/RegisterForm";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch >
      <Route exact path="/login" component={LoginFrom} />
      <Route exact path="/users" component = {RegisterFrom}/>
    </Switch >
  </BrowserRouter>
);

export default App;