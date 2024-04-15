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
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;
export const Logo = styled.img`
  width: 175px;
  height: 55px;
`;
export const HeaderContactContainer = styled.div`
  display: flex;
  gap: 30px;
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
