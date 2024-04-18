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
import { ReviewsComponent } from "../../common/ReviewsComponent/ReviewsComponent";
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
        <Products category={bestsellerQueryString} />
      </Section>
      <Blog />
      <Section>
        <SectionTitle>Nasze marki premium</SectionTitle>
        <Brands />
      </Section>
      <Section>
        <SectionTitle>Co mówią o nas klienci</SectionTitle>
        <ReviewsComponent placeId="ChIJc5eK49TKG0cRGmBqSZwKy24" />
      </Section>
      <Section>
        <SectionTitle>
          Gadżety reklamowe - Na tym znamy się najlepiej
        </SectionTitle>
        {aboutUsData.map((data, index) => (
          <AboutUs
            key={index}
            pathImage={data.image}
            description={data.description}
            title={data.title}
          />
        ))}
      </Section>
    </>
  );
};
