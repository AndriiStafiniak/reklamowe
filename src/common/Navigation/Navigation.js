import React, { useEffect, useState } from "react";
import { SubMenu } from "./subMenu/SubMenu";
import {
  NavigationWrapper,
  BurgerMenuButton,
  BurgerIcon,
  NavContainer,
  MenuLink,
} from "./style";
import { Arrow } from "./subMenu/style";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleSubMenu = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenIndexes({});
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      label: "Oferta gadżetów",
      path: "/gadzety",
      subItems: [
        {
          label: "Podstrona 1",
          path: "/gadzety/podstrona-1",
          subItems: [
            {
              label: "Zagnieżdżona podstrona 1",
              path: "/gadzety/podstrona-1/zagniezdzona1",
            },
            {
              label: "Zagnieżdżona podstrona 1",
              path: "/gadzety/podstrona-1/zagniezdzona1",
            },
          ],
        },
        {
          label: "Podstrona 2",
          path: "/gadzety/podstrona-2",
          subItems: [
            {
              label: "Zagnieżdżona podstrona 1",
              path: "/gadzety/podstrona-1/zagniezdzona1",
            },
            {
              label: "Zagnieżdżona podstrona 1",
              path: "/gadzety/podstrona-1/zagniezdzona1",
            },
          ],
        },
      ],
    },
    {
      label: "Oferta tematyczna",
      path: "/oferta-tematyczna",
      subItems: [
        {
          label: "Podstrona 1",
          path: "/gadzety/podstrona-1",
        },
        { label: "Podstrona 2", path: "/gadzety/podstrona-2" },
      ],
    },
    {
      label: "Rabaty i promocje",
      path: "/rabaty",
      subItems: [
        {
          label: "Podstrona 1",
          path: "/gadzety/podstrona-1",
        },
        { label: "Podstrona 2", path: "/gadzety/podstrona-2" },
      ],
    },
  ];

  return (
    <>
      <BurgerMenuButton onClick={() => setIsOpen(!isOpen)}>
        <BurgerIcon isOpen={isOpen} />
      </BurgerMenuButton>
      <NavigationWrapper>
        {(isMobile && isOpen) || !isMobile ? (
          <NavContainer isOpen={isOpen}>
            <MenuLink exact to="/" onClick={closeMenu}>
              Strona główna
            </MenuLink>
            {items.map((item, index) => (
              <>
                <MenuLink
                  key={index}
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu(index);
                  }}
                >
                  {item.label}
                  <Arrow isOpen={isOpen} />
                </MenuLink>
                {openIndexes[index] && (
                  <SubMenu items={item.subItems} closeMenu={closeMenu} />
                )}
              </>
            ))}
            <MenuLink exact to="kontakt" onClick={closeMenu}>
              Kontakt
            </MenuLink>
          </NavContainer>
        ) : null}
      </NavigationWrapper>
    </>
  );
};
