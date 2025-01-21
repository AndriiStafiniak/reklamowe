import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Products } from "./features/Products/Procuts";
import { Header } from "./common/Header/Header";
import { Navigation } from "./common/Navigation/Navigation";
import { Homepage } from "./features/Homepage/Homepage";
import {
  toContact,
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
import GlobalStyles from "./styles/GlobalStyles";
import { Container } from "./components/Container/Container";
import { ProductDetails } from "./features/Products/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Header />
        <Navigation />
        <Container>
          <Routes>
            <Route path={toContact()} element={<Contact />} />
            <Route path={toHomePage()} element={<Homepage />} />
            <Route path={toMenClothes()} element={<MenClothes />} />
            <Route path={toWomenClothes()} element={<WomenClothes />} />
            <Route path={toJewelery()} element={<Jewelery />} />
            <Route path={toElectronics()} element={<Electronics />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/" element={<Navigate to={toHomePage()} />} />
          </Routes>
        </Container>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
