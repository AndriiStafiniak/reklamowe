import {
  ArticleTile,
  ContentContainer,
  Description,
  Image,
  Title,
  Wrapper,
  CardsContainer,
} from "./style";

// Komponent dla pojedynczej karty
const AboutUsCard = ({ title, pathImage, description }) => {
  return (
    <Wrapper>
      <ArticleTile>
        <Title>{title}</Title>
      </ArticleTile>
      <ContentContainer>
        <Image src={pathImage} alt={title} loading="lazy" />
        <Description>{description}</Description>
      </ContentContainer>
    </Wrapper>
  );
};

// Główny komponent wyświetlający wszystkie karty
export const AboutUs = ({ data }) => {
  return (
    <CardsContainer>
      {data.map((item, index) => (
        <AboutUsCard
          key={index}
          title={item.title}
          pathImage={item.image}
          description={item.description}
        />
      ))}
    </CardsContainer>
  );
};
