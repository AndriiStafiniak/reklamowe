import { MenuLink } from "../../common/Navigation/style";
import {
  toElectronics,
  toJewelery,
  toMenClothes,
  toWomenClothes,
} from "../../routs";
import Slider from "../Slider/Slider";
import { Products } from "../Products/Procuts";
import {
  CategoryLink,
  CategoryLinkWrapper,
  PremiumBrand,
  PremiumBrandItem,
  PremiumBrandItemGrid,
  Section,
  SectionTitle,
} from "./style";
const bestsellerQueryString = "?limit=6";
const items = Array.from({ length: 9 }, (_, i) => i);

export const Homepage = () => {
  return (
    <>
      <Section>
        <Slider />
      </Section>
      <Section>
        <SectionTitle>Kategorie</SectionTitle>
        <CategoryLinkWrapper>
          <CategoryLink to={toMenClothes()}> Odzież Męska 🕺</CategoryLink>
          <CategoryLink to={toWomenClothes()}>Odzież Damska 💃</CategoryLink>
          <CategoryLink to={toJewelery()}>Biżuteria 💍</CategoryLink>
          <CategoryLink to={toElectronics()}>Elektronika 📱</CategoryLink>
        </CategoryLinkWrapper>
      </Section>
      <Section>
        <SectionTitle>Bestsellery</SectionTitle>
        <Products category={bestsellerQueryString} />
      </Section>
      <Section>
        <SectionTitle>Nasze marki premium</SectionTitle>
        <PremiumBrandItemGrid>
          {items.map((item) => (
            <PremiumBrand key={item} to={toElectronics()}>
              <PremiumBrandItem />
            </PremiumBrand>
          ))}
        </PremiumBrandItemGrid>
      </Section>
      <Section>
        <SectionTitle>Co mówią o nas klienci</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>
          Gadżety reklamowe - Na tym znamy się najlepiej
        </SectionTitle>
      </Section>
    </>
  );
};
