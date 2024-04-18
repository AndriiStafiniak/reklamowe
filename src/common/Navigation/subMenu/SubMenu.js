import { useState } from "react";
import { Arrow, MenuItem, SubMenuContainer, SubMenuLink } from "./style";

export const SubMenu = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleSubMenu = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      {items &&
        items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              toggleSubMenu(index);
            }}
          >
            <SubMenuLink to={item.path} onClick={(e) => e.preventDefault()}>
              {item.label}
            </SubMenuLink>
            {item.subItems && openIndexes[index] && (
              <SubMenuContainer isOpen={!!openIndexes[index]}>
                <SubMenu items={item.subItems} />
              </SubMenuContainer>
            )}
          </MenuItem>
        ))}
    </div>
  );
};
