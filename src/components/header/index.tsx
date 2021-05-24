import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: relative;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ec1c23;
  margin-bottom: 40px;
  h1 {
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    font-size: 21px;
    line-height: 64px;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  border-radius: 50%;
  border: 3px solid white;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

interface IHeaderProps {
  icon: string;
  headerText: string;
  onClick: () => void;
}

const Header: React.FC<IHeaderProps> = ({ icon, onClick, headerText }) => {
  return (
    <HeaderContainer>
      <h1>{headerText}</h1>
      <IconContainer onClick={onClick}>
        <img src={icon} alt="favourite" />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
