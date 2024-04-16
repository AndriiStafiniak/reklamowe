import { useEffect, useState } from "react";
import {
  Arrow,
  ArrowButton,
  ArrowIconStyle,
  SubMenuContainer,
  SubMenuContainerMain,
  SubMenuLink,
  SubMenuLinkKontainer,
  SubMenuTitle,
  SubNavContainer,
} from "./style";

export const SubMenu = ({
  onItemClick,
  subMenuItem0,
  subMenuPath0,
  subMenuPath1,
  subMenuPath2,
  subMenuName,
  subMenuItem1,
  subMenuItem2,
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setShowSubMenu(true);
  };
  useEffect(() => {
    if (showSubMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showSubMenu]);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };
  const hideMemu = () => {
    if (showSubMenu) {
      setShowSubMenu(false);
    } else if (!showSubMenu) {
      setShowSubMenu(true);
    }
    return;
  };

  return (
    <SubMenuContainerMain
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SubMenuLinkKontainer>
        <ArrowButton onClick={hideMemu}>
          <SubMenuTitle>{subMenuName}</SubMenuTitle>
        </ArrowButton>
        <Arrow isOpen={isOpen} onClick={toggleOpen}>
          ►
        </Arrow>
      </SubMenuLinkKontainer>
      {showSubMenu && (
        <SubNavContainer>
          <SubMenuLink onClick={onItemClick} to={subMenuPath0}>
            {subMenuItem0}
          </SubMenuLink>
          <SubMenuLink onClick={onItemClick} to={subMenuPath1}>
            {subMenuItem1}
          </SubMenuLink>
          <SubMenuLink onClick={onItemClick} to={subMenuPath2}>
            {subMenuItem2}
          </SubMenuLink>
        </SubNavContainer>
      )}
    </SubMenuContainerMain>
  );
};
