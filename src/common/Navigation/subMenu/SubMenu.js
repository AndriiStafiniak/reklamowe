import { useState } from "react";
import {
  MenuItem,
  SubMenuContainer,
  SubMenuLink,
  WrapperSubMenu,
} from "./style";

export const SubMenu = ({ items, closeMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };
  const handleLinkClick = (e, hasSubItems) => {
    if (!hasSubItems) {
      closeMenu();
    }
  };

  return (
    <WrapperSubMenu>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            toggleSubMenu(index);
          }}
        >
          <SubMenuLink
            to={item.path || "#"}
            onClick={(e) => handleLinkClick(e, !!item.subItems)}
          >
            {item.label}
          </SubMenuLink>
          {item.subItems && openIndex === index && (
            <SubMenuContainer isOpen={true}>
              <SubMenu items={item.subItems} closeMenu={closeMenu} />{" "}
            </SubMenuContainer>
          )}
        </MenuItem>
      ))}
    </WrapperSubMenu>
  );
};
