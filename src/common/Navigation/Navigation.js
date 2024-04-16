import React, { useEffect, useState } from "react";
import {
  toElectronics,
  toHomePage,
  toJewelery,
  toMenClothes,
  toWomenClothes,
} from "../../routs";
import {
  MenuLink,
  BurgerMenuButton,
  BurgerIcon,
  NavContainer,
  NavigationWrapper,
} from "./style";
import { SubMenu } from "./subMenu/SubMenu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const closeMenu = () => {
    setTimeout(() => setIsOpen(false), 100);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const subMenuItemsMen = ["Podstrona 1", "Podstrona 2", "Podstrona 3"];
  const subMenuPathsMen = ["/podstrona-1", "/podstrona-2", "podstrona-3"];

  const subMenuItemsWomen = ["Podstrona 1", "Podstrona 2", "Podstrona 3"];
  const subMenuPathsWomen = ["/podstrona-1", "/podstrona-2", "podstrona-3"];

  const subMenuItemsJewelery = ["Podstrona 1", "Podstrona 2", "Podstrona 3"];
  const subMenuPathsJewelery = ["/podstrona-1", "/podstrona-2", "podstrona-3"];

  const subMenuItemsElectronics = ["Podstrona 1", "Podstrona 2", "Podstrona 3"];
  const subMenuPathsElectronics = [
    "/podstrona-1",
    "/podstrona-2",
    "podstrona-3",
  ];

  return (
    <NavigationWrapper>
      <BurgerMenuButton onClick={() => setIsOpen(!isOpen)}>
        <BurgerIcon isOpen={isOpen} />
      </BurgerMenuButton>

      {(isMobile && isOpen) || !isMobile ? (
        <NavContainer isOpen={isOpen}>
          <MenuLink to={toHomePage()} onClick={closeMenu}>
            Strona główna
          </MenuLink>
          <MenuLink to={toMenClothes()}>
            <SubMenu
              onItemClick={closeMenu}
              onClick={closeMenu}
              subMenuName={"Ubrania dla mężczyzn"}
              subMenuItem0={subMenuItemsMen[0]}
              subMenuPath0={subMenuPathsMen[0]}
              subMenuItem1={subMenuItemsMen[1]}
              subMenuPath1={subMenuPathsMen[1]}
              subMenuItem2={subMenuItemsMen[2]}
              subMenuPath2={subMenuPathsMen[2]}
            />
          </MenuLink>
          <MenuLink to={toWomenClothes()}>
            <SubMenu
              onItemClick={closeMenu}
              onClick={closeMenu}
              subMenuName={"Ubrania dla kobiet"}
              subMenuItem0={subMenuItemsWomen[0]}
              subMenuPath0={subMenuPathsWomen[0]}
              subMenuItem1={subMenuItemsWomen[1]}
              subMenuPath1={subMenuPathsWomen[1]}
              subMenuItem2={subMenuItemsWomen[2]}
              subMenuPath2={subMenuPathsWomen[2]}
            />
          </MenuLink>
          <MenuLink to={toJewelery()}>
            <SubMenu
              onItemClick={closeMenu}
              onClick={closeMenu}
              subMenuName={"Bizuteria"}
              subMenuItem0={subMenuItemsJewelery[0]}
              subMenuPath0={subMenuPathsJewelery[0]}
              subMenuItem1={subMenuItemsJewelery[1]}
              subMenuPath1={subMenuPathsJewelery[1]}
              subMenuItem2={subMenuItemsJewelery[2]}
              subMenuPath2={subMenuPathsJewelery[2]}
            />
          </MenuLink>
          <MenuLink to={toElectronics()}>
            <SubMenu
              onItemClick={closeMenu}
              onClick={closeMenu}
              subMenuName={"Elektronika"}
              subMenuItem0={subMenuItemsElectronics[0]}
              subMenuPath0={subMenuPathsElectronics[0]}
              subMenuItem1={subMenuItemsElectronics[1]}
              subMenuPath1={subMenuPathsElectronics[1]}
              subMenuItem2={subMenuItemsElectronics[2]}
              subMenuPath2={subMenuPathsElectronics[2]}
            />
          </MenuLink>
        </NavContainer>
      ) : null}
    </NavigationWrapper>
  );
};
