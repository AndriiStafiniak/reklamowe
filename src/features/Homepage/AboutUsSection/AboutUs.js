import {
  ArticleTile,
  ContentContainer,
  Description,
  Image,
  Title,
  Wrapper,
} from "./style";

export const AboutUs = ({ title, pathImage, description }) => {
  return (
    <Wrapper>
      <ArticleTile>
        <Title>{title}</Title>
      </ArticleTile>
      <ContentContainer>
        <Image src={pathImage} alt="Photo" />
        <Description>{description}</Description>
      </ContentContainer>
    </Wrapper>
  );
};
