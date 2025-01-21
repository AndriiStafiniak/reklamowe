import {
  ContactContent,
  HeaderContactContainer,
  HeaderContainer,
  HeaderWrapper,
  HideContacttext,
  Logo,
  LogoLink,
  StyledMailIcon,
  StyledTelIcon,
} from "./style";
import MainLogo from "../../images/logo.png";
import { toHomePage } from "../../routs";
import { Container } from "../../components/Container/Container";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <LogoLink to={toHomePage()}>
            {" "}
            <Logo src={MainLogo} alt="Logo" />
          </LogoLink>
          <HeaderContactContainer>
            <ContactContent to="mailto:biuro@reklamowo24.pl">
              <StyledMailIcon />
              <HideContacttext> biuro@reklamowo24.pl</HideContacttext>
            </ContactContent>
            <ContactContent to="tel:426305515">
              <StyledTelIcon />
              <HideContacttext>426305515</HideContacttext>
            </ContactContent>
          </HeaderContactContainer>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};
