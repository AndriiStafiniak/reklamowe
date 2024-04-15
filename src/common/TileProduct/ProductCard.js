import {
  BottomContainer,
  ContentContainer,
  ExtraPriceContent,
  IconStarStyled,
  Price,
  ProductCategory,
  ProductImage,
  RateContainer,
  RateText,
  TileWrapper,
  TitleProduct,
} from "./style";

export const ProductCard = ({ product }) => {
  const getThreeFirstWords = (text) => {
    const words = text.split(" ");
    return words.slice(0, 3).join(" ");
  };
  const productPrice = product.price.toFixed(2).replace(".", ",");
  const shirtTitle = getThreeFirstWords(product.title);
  return (
    <TileWrapper>
      <ProductImage src={product.image} alt={`Image of ${product.title}`} />
      <ContentContainer>
        <TitleProduct>{shirtTitle}</TitleProduct>
        <ProductCategory>{product.category}</ProductCategory>
      </ContentContainer>
      <BottomContainer>
        <RateContainer>
          <RateText>{product.rating.rate.toFixed(1)}</RateText>
          <IconStarStyled />
          <RateText>
            {product.rating.count}
            ocen
          </RateText>
        </RateContainer>
        <Price>
          <ExtraPriceContent> </ExtraPriceContent>{" "}
          {!productPrice ? "" : productPrice} zł
        </Price>
      </BottomContainer>
    </TileWrapper>
  );
};
