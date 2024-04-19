import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Products } from "./features/Products/Procuts";
import { Header } from "./common/Header/Header";
import { Navigation } from "./common/Navigation/Navigation";
import { Homepage } from "./features/Homepage/Homepage";
import {
  toElectronics,
  toHomePage,
  toJewelery,
  toMenClothes,
  toWomenClothes,
} from "./routs";
import { MenClothes } from "./features/Products/MenClothes/MenClothes";
import { WomenClothes } from "./features/Products/WomenClothes/WomenClothes";
import { Jewelery } from "./features/Products/Jewelery/Jewelery";
import { Electronics } from "./features/Products/Electronics/Electronics";
import { Footer } from "./common/Footer/Footer";
import { Contact } from "./features/Homepage/Contact/Contact";

function App() {
  return (
    <HashRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path={toHomePage()} element={<Homepage />} />
        <Route path={toMenClothes()} element={<MenClothes />} />
        <Route path={toWomenClothes()} element={<WomenClothes />} />
        <Route path={toJewelery()} element={<Jewelery />} />
        <Route path={toElectronics()} element={<Electronics />} />

        <Route path="/" element={<Navigate to={toHomePage()} />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
