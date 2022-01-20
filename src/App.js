import { Bar1, Bar2, MyCatsAge } from "./components/bars";
import StateButton from "./components/StateButton";
import EffectComp from "./components/EffectComp";
import AllUSers from "./components/AllUsers";
import MyForm from "./components/Form";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function catsAge(age) {
  return age + 5;
}

export default App;
