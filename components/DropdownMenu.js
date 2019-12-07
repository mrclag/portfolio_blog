import React, { useState } from 'react';
import styled from 'styled-components';

const Select = props => {
  const [selected, setSelected] = useState(null);
  const [opened, setOpened] = useState(false);

  const onOpen = () => {
    setOpened(!opened);
  };

  const onSelect = option => {
    setSelected(option);
    setOpened(false);
    option.handlers();
  };

  const getOptions = () => {
    return props.options.map(o => (
      <Option key={o.key} option={o} onSelect={onSelect} />
    ));
  };

  let items = getOptions();
  let selectedVal = selected ? selected.value : 'Select';
  let cssClass = opened ? 'show' : 'hide';

  return (
    <div className="select" onClick={onOpen}>
      <span>{selectedVal}</span>
      <ul className={cssClass}>{items}</ul>
    </div>
  );
};

const Option = props => {
  const onSelect = e => {
    e.preventDefault();
    props.onSelect(props.option);
  };

  return (
    <li>
      <a href="#" onClick={onSelect}>
        {props.option.value}
      </a>
    </li>
  );
};

const DropdownMenu = props => {
  return (
    <MenuWrapper>
      <Select options={props.items} />
    </MenuWrapper>
  );
};

export default DropdownMenu;

const MenuWrapper = styled.div`
  .select {
    border: 1px solid black;
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    top: 0;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    position: absolute;
    border: 1px solid black;
    left: -1px;
    top: 38px;
    width: 100%;
  }

  .show {
    display: inline-block;
  }

  .hide {
    display: none;
  }
`;
