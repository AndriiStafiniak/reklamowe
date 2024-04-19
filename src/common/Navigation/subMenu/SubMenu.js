import { useEffect, useState } from "react";
import {
  Arrow,
  MenuItem,
  SubMenuContainer,
  SubMenuLink,
  WrapperSubMenu,
} from "./style";

export const SubMenu = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".MenuItem")) {
        setOpenIndexes({});
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSubMenu = (index) => {
    if (openIndexes[index]) {
      setOpenIndexes({});
    } else {
      setOpenIndexes({ [index]: true });
    }
  };

  return (
    <WrapperSubMenu>
      {items.map((item, index) => (
        <MenuItem
          className="MenuItem"
          key={index}
          onClick={(e) => {
            toggleSubMenu(index);
          }}
        >
          <SubMenuLink
            to={item.path || "#"}
            onClick={
              item.subItems && item.subItems.length > 0
                ? (e) => {
                    e.preventDefault();
                  }
                : null
            }
          >
            {item.label}
          </SubMenuLink>
          {item.subItems && openIndexes[index] && (
            <SubMenuContainer isOpen={!!openIndexes[index]}>
              <SubMenu items={item.subItems} />
            </SubMenuContainer>
          )}
        </MenuItem>
      ))}
    </WrapperSubMenu>
  );
};
