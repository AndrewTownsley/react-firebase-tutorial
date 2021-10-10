import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const theme = {
  blue: {
    default: '#3f51b5',
    hover: '#283593',
  },
  pink: {
    default: '#e91e63',
    hover: '#ad1457'
  }
};

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color: 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover}
  }
  &: disabled {
    opacity: 0.7;
    cursor: default;
  }
`

Button.defaultProps = {
  theme: "blue"
};

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({active}) => 
    active &&
    `
    opacity: 1;
    `
}
`

const Tab = styled.button`
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) => 
    active && 
    `
      border-bottom: 2px solid black;
      opacity: 1;
    `
}
`

const types = ['cash', 'card', 'crypto'];

const ToggleGroup = () => {
  const [active, setActive] = useState(types[0]);

  return(
    <div>
      {
        types.map((type) => 
          <ButtonToggle
            active={active === type}
            onClick={()=>setActive(type)}
            key={type}
          >
            {type}
          </ButtonToggle>
        )
      }
    </div>
  )
}

const TabGroup = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      <div>
      {
        types.map(type => 
          <Tab
          key={type}
          active={active === type}
          onClick={()=>setActive(type)}
          >
              {type}
            </Tab>
          )
        }
      </div>
      <p>Your payment selection: {active}</p>
    </div>
  )
}

function ButtonTut() {

const clickMe = () => {
  alert('You clicked it')
}

  return (
    <div className="App">
      <div>
      <Button onClick={clickMe}>Button</Button>
      </div>
      <div>
        <Button theme='pink' onClick={clickMe}>
          Pink Theme
        </Button>
      </div>
      <div>
        <Button disabled onClick={clickMe}>
          Disabled
        </Button>
      </div>
      <div>
        <a href="https://react.school" target="_blank">
          <Button>Link</Button>
        </a>
        <ToggleGroup/>
        <TabGroup/>
      </div>
    </div>

  );
}

export default ButtonTut;
