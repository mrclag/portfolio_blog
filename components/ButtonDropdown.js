import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const PortButtonDropdown = ({ items }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const renderMenu = items => {
    return (
      <DropdownMenu>
        {items.map((item, index) => (
          <DropdownItem key={index} {...item.handlers}>
            {item.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    );
  };

  return (
    <ButtonDropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      style={{ marginLeft: '10px' }}
    >
      <DropdownToggle caret size="sm"></DropdownToggle>
      {renderMenu(items)}
    </ButtonDropdown>
  );
};

export default PortButtonDropdown;
