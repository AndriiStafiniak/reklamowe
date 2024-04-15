import { HashRouter } from "react-router-dom";
import { Products } from "./features/fetchProducts/Procuts";

function App() {
  return (
    <HashRouter>
      <Products />
    </HashRouter>
  );
}

export default App;
