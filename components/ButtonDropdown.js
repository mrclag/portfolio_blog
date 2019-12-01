import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const PortButtonDropdown = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const { items } = props;

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
      className="port-dropdown"
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
