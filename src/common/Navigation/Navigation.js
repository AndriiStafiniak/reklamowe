import React, { useEffect, useRef, useState } from "react";
import { SubMenu } from "./subMenu/SubMenu";
import {
  NavigationWrapper,
  BurgerMenuButton,
  BurgerIcon,
  NavContainer,
  MenuLink,
  Column,
} from "./style";
import { Arrow } from "./subMenu/style";
import {
  toElectronics,
  toJewelery,
  toMenClothes,
  toWomenClothes,
} from "../../routs";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [openIndexes, setOpenIndexes] = useState({});
  const navContainerRef = useRef();

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
  }, [isOpen]);
  const closeAllSubMenus = () => {
    setOpenIndexes({});
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        closeAllSubMenus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const items = [
    {
      label: "Oferta gadżetów",
      path: "/",
      subItems: [
        {
          label: "Do biura →",
          path: "",
          subItems: [
            {
              label: "Gadżety elektroniczne",
              path: toElectronics(),
            },
          ],
        },
        {
          label: "VIP →",
          path: "/",
          subItems: [
            {
              label: "VIP ubrania męski",
              path: toMenClothes(),
            },
            {
              label: "VIP ubrania damski ",
              path: toWomenClothes(),
            },
          ],
        },
        {
          label: "Tekstylia i Odzież →",
          path: "/",
          subItems: [
            {
              label: "Odzież Damska",
              path: toWomenClothes(),
            },
            {
              label: "Odzież Męska",
              path: toMenClothes(),
            },
          ],
        },
      ],
    },
    {
      label: "Oferta tematyczna",
      path: "/",
      subItems: [
        {
          label: "Nasze bestsellery",
          path: toJewelery(),
        },
        { label: "Gadżety markowe", path: toElectronics() },
        { label: "Nowości", path: toWomenClothes() },
      ],
    },
    {
      label: "Rabaty i promocje",
      path: "/",
      subItems: [
        {
          label: "Produkty w najniższych cenach",
          path: toMenClothes(),
        },
        { label: "Promocja miesiąca", path: toJewelery() },
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
          <NavContainer isOpen={isOpen} ref={navContainerRef}>
            <MenuLink exact to="/" onClick={closeMenu}>
              Strona główna
            </MenuLink>
            {items.map((item, index) => (
              <Column key={index}>
                <MenuLink
                  key={index}
                  to={item.path || "#"}
                  onClick={(e) => {
                    toggleSubMenu(index);
                  }}
                >
                  {item.label}
                  <Arrow isOpen={openIndexes[index]} />
                </MenuLink>

                {openIndexes[index] && (
                  <SubMenu
                    closeMenu={closeMenu}
                    items={item.subItems}
                    to={item.subItems.path}
                  />
                )}
              </Column>
            ))}
            <MenuLink to="/contact" onClick={closeMenu}>
              Kontakt
            </MenuLink>
          </NavContainer>
        ) : null}
      </NavigationWrapper>
    </>
  );
};
