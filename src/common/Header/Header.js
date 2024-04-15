import {
  ContactContent,
  HeaderContactContainer,
  HeaderContainer,
  Logo,
  StyledMailIcon,
  StyledTelIcon,
} from "./style";
import MainLogo from "../../images/logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={MainLogo} />
      <HeaderContactContainer>
        <ContactContent to="mailto:biuro@reklamowo24.pl">
          <StyledMailIcon />
          biuro@reklamowo24.pl
        </ContactContent>
        <ContactContent to="tel:426305515">
          <StyledTelIcon />
          426305515
        </ContactContent>
      </HeaderContactContainer>
    </HeaderContainer>
  );
};
