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
import { toContact } from "../../routs";
import { Container } from "../../components/Container/Container";
const imagePath = require("../../images/logo.png");

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Container>
          <NewsletterForm />
          <FooterLinkContainer>
            <NavContainer>
              <Text>Zamowienia</Text>
              <MenuLink to="https://gadzety-reklamowe.com/content/najczesciej-zadawane-pytania">
                Najczęściej zadawane pytania{" "}
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/czas-realizacji">
                Czas realizacji
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/znakowanie">
                Znakowanie
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/jak-zamawiac">
                Sposoby zamówienia
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/dostawa">
                Dostawa i platnosc
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/uwagi-reklamacje">
                Reklamacje
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/regulamin#">
                Regulamin zakupów
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/privacy-policy">
                Polityka prywatnosci
              </MenuLink>
            </NavContainer>

            <NavContainer>
              <Text>Informacje</Text>

              <MenuLink to="https://gadzety-reklamowe.com/site/3/aktualnosci1.html">
                Aktualności
              </MenuLink>
              <MenuLink to={toContact()}>Kontakt</MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/o-nas">
                O nas
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/gadzety_z_nadrukiem,1.html">
                Nasze realizacje
              </MenuLink>
              <MenuLink to="#reviews">Referencje</MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/katalogi">
                Katalogi do pobrania
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/content/certyfikaty">
                Oznaczenia
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/l/oms/">
                System OMS
              </MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/blog/">Blog</MenuLink>
              <MenuLink to="https://gadzety-reklamowe.com/agencja-reklamowa-szpilka-do-nas">
                Agencja reklamowa
              </MenuLink>
            </NavContainer>
            <NavContainer>
              <Text>Kontakt</Text>
              <MenuLink
                $isAdress={true}
                target="__blank"
                to="https://www.google.pl/maps/place/Gad%C5%BCety+reklamowe+-+Reklamowe24/@51.8265484,19.4256893,17z/data=!3m1!4b1!4m6!3m5!1s0x471bcad4e38a9773:0x6ecb0a9c496a601a!8m2!3d51.8265451!4d19.4282642!16s%2Fg%2F1tg14h21?entry=ttu"
              >
                <span>Reklamowe24</span> <span>ul. Zgierska 249A </span>
                <span>91-495 Łódź</span>
              </MenuLink>
              <MenuLink $isAdress={true} to="mailto:biuro@reklamowe24.pl">
                <span> Napisz do nas </span>
                <span>biuro@reklamowe24.pl</span>
              </MenuLink>
              <MenuLink $isAdress={true} to="tel:42 630 55 15">
                <span>Zadzwon do nas</span> <span>42 630 55 15</span>
              </MenuLink>
            </NavContainer>
          </FooterLinkContainer>
          <SubFooter>
            <FooterLogo src={imagePath} />
            <Text>
              © 2023 Sklep internetowy Reklamowe24.pl. Gadżety reklamowe w Twoim
              mieście: Warszawa, Katowice, Ruda Śląska, Gdańsk, Gadżety
              reklamowe Wrocław, Szczecin, Gadżety reklamowe Bydgoszcz, Poznań,
              Białystok, Kraków, Lublin, Gadżety reklamowe Rzeszów.
            </Text>
          </SubFooter>
        </Container>
      </FooterContainer>
    </>
  );
};
