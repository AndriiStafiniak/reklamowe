import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as MailIcon } from "../../images/icons/email.svg";
import { ReactComponent as TelIcon } from "../../images/icons/tel.svg";

export const StyledMailIcon = styled(MailIcon)`
  transition: 0.2s;
  &:hover {
    fill: ${({ theme }) => theme.colors.cerulean};
  }
`;

export const StyledTelIcon = styled(TelIcon)`
  transition: 0.2s;
  &:hover {
    fill: ${({ theme }) => theme.colors.cerulean};
  }
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const Logo = styled.img`
  width: 175px;
  height: 55px;
  @media (max-width: 900px) {
    width: 100px;
    height: 40px;
  }
`;

export const HeaderContactContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 900px) {
    margin: 0 100px 0 10px;
    align-self: center;
  }
`;

export const ContactContent = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.cerulean};
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

export const HideContacttext = styled.span`
  @media (max-width: 900px) {
    display: none;
  }
`;
