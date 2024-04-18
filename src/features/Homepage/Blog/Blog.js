import {
  Button,
  StyledBlogMainTile,
  StyledBlogTile,
  StyledBlogTileNav,
  StyledBlogWrapper,
  Title,
} from "./style";

const items = Array.from({ length: 3 }, (_, i) => i);
const kids = require("../../../images/kids.png");
const winterDays = require("../../../images/winter.jpg");
const winterHoliday = require("../../../images/winterBlog.png");

export const Blog = () => {
  const itemsData = [
    { image: kids, title: "Gadżety Reklamowe dla Dzieci" },
    { image: winterDays, title: "Gorące propozycje na chłodne dni " },
    { image: winterHoliday, title: "Świąteczne gadżety reklamowe" },
  ];
  const BlogWrapper = ({ children }) => (
    <StyledBlogWrapper>{children}</StyledBlogWrapper>
  );
  const BlogTile = ({ children, to }) => (
    <StyledBlogTileNav to={to}>{children}</StyledBlogTileNav>
  );
  const BlogItem = ({ image, title }) => (
    <StyledBlogTile>
      <img src={image} alt="Brand" width={"300px"} />
      <Title>{title}</Title>
    </StyledBlogTile>
  );

  return (
    <BlogWrapper>
      <StyledBlogMainTile>
        <Title>Blog</Title>
        <StyledBlogTileNav to="https://gadzety-reklamowe.com/blog/">
          Na każdą okazję
        </StyledBlogTileNav>
        <StyledBlogTileNav to="https://gadzety-reklamowe.com/blog/">
          Gadżetowe ABC
        </StyledBlogTileNav>
        <StyledBlogTileNav to="https://gadzety-reklamowe.com/blog/">
          Trendy i ciekawostki
        </StyledBlogTileNav>
        <StyledBlogTileNav to="https://gadzety-reklamowe.com/blog/">
          Realizacje
        </StyledBlogTileNav>
        <StyledBlogTileNav to="https://gadzety-reklamowe.com/blog/">
          O blogu
        </StyledBlogTileNav>
        <Button>Przejdź do bloga</Button>
      </StyledBlogMainTile>
      {items.map((item) => (
        <BlogTile key={item} to={"https://gadzety-reklamowe.com/blog/"}>
          <BlogItem
            image={itemsData[item].image}
            title={itemsData[item].title}
          />
        </BlogTile>
      ))}
    </BlogWrapper>
  );
};
