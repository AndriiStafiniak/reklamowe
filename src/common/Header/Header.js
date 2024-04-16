import {
  ContactContent,
  HeaderContactContainer,
  HeaderContainer,
  HideContacttext,
  Logo,
  LogoLink,
  StyledMailIcon,
  StyledTelIcon,
} from "./style";
import MainLogo from "../../images/logo.png";
import { toHomePage, toWhyWaveHome } from "../../routs";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to={toHomePage()}>
        {" "}
        <Logo src={MainLogo} />
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
  );
};
