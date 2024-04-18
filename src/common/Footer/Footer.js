import {
  FooterContainer,
  FooterLinkContainer,
  FooterLogo,
  MenuLink,
  NavContainer,
  SubFooter,
  Text,
} from "./style";
import { NewsletterForm } from "./Newsletter/Newsletter";
const imagePath = require("../../images/logo.png");

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <NewsletterForm />
        <FooterLinkContainer>
          <NavContainer>
            <Text>Zamowienia</Text>
            <MenuLink to="">Najczęściej zadawane pytania </MenuLink>
            <MenuLink to="">Czas realizacji</MenuLink>
            <MenuLink to="">Znakowanie</MenuLink>
            <MenuLink to="">Sposoby zamówienia</MenuLink>
            <MenuLink to="">Dostawa i platnosc</MenuLink>
            <MenuLink to="">Reklamacje</MenuLink>
            <MenuLink to="">Regulamin zakupów</MenuLink>
            <MenuLink to="">Polityka prywatnosci</MenuLink>
          </NavContainer>

          <NavContainer>
            <Text>Informacje</Text>
            <MenuLink to="">Najczęściej zadawane pytania </MenuLink>
            <MenuLink to="">Czas realizacji</MenuLink>
            <MenuLink to="">Znakowanie</MenuLink>
            <MenuLink to="">Sposoby zamówienia</MenuLink>
            <MenuLink to="">Dostawa i platnosc</MenuLink>
            <MenuLink to="">Reklamacje</MenuLink>
            <MenuLink to="">Regulamin zakupów</MenuLink>
            <MenuLink to="">Polityka prywatnosci</MenuLink>
          </NavContainer>
          <NavContainer>
            <Text>Kontakt</Text>
            <MenuLink isAdress={true} to="Warszawa">
              Reklamowe24 ul. Zgierska 249A 91-495 Łódź
            </MenuLink>
            <MenuLink to="biuro@reklamowe24.pl">Napisz do nas</MenuLink>
            <MenuLink to="tel:42 630 55 15">Zadzwon do nas</MenuLink>
          </NavContainer>
        </FooterLinkContainer>
      </FooterContainer>
      <SubFooter>
        <FooterLogo src={imagePath} />
        <Text>
          © 2023 Sklep internetowy Reklamowe24.pl. Gadżety reklamowe w Twoim
          mieście: Warszawa, Katowice, Ruda Śląska, Gdańsk, Gadżety reklamowe
          Wrocław, Szczecin, Gadżety reklamowe Bydgoszcz, Poznań, Białystok,
          Kraków, Lublin, Gadżety reklamowe Rzeszów.
        </Text>
      </SubFooter>
    </>
  );
};
