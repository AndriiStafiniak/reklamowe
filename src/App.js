import { HashRouter } from "react-router-dom";
import { Products } from "./features/fetchProducts/Procuts";
import { Header } from "./common/Header/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <Products />
    </HashRouter>
  );
}

export default App;
