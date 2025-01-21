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
  Section,
  SectionTitle,
} from "./style";

import { Blog } from "./Blog/Blog";
import { Brands } from "./Brands/Brands";
import { AboutUs } from "./AboutUsSection/AboutUs";
import { aboutUsData } from "./AboutUsSection/aboutUsData";

export const Homepage = () => {
  const bestsellerQueryString = "?limit=6";
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
        <Products isScrollable={true} category={bestsellerQueryString} />
      </Section>
      <Blog />
      <Section>
        <SectionTitle>Nasze marki premium</SectionTitle>
        <Brands />
      </Section>

      <Section>
        <SectionTitle>
          Gadżety reklamowe - Na tym znamy się najlepiej
        </SectionTitle>
        <AboutUs data={aboutUsData} />
      </Section>
    </>
  );
};
