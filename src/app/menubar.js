"use client"

import React from 'react';
import styled from '@emotion/styled';
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser } from 'react-icons/fi';
import { RiMovie2Line } from 'react-icons/ri';
import { PiChatsCircle } from 'react-icons/pi';

const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #424242;
  height: 60px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const MenuBox = styled.div`
  width : 20%;
  height : 100%;
  border-top : 2px solid #6f6f6f;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
  line-height: 2.4;
  
  &:hover {
    color: #ccc;
    transition: color 0.2s ease-in-out;
  }
`;

const MenuBar = () => {
  return (
    <MenuBarContainer>
     <MenuBox>
      <a href='/home'>
        <MenuIcon>
          <FiHome />
        </MenuIcon>
      </a>
      </MenuBox>
      <MenuBox>
        <a href='/movie'>
          <MenuIcon>
            <RiMovie2Line />
          </MenuIcon>
        </a>
      </MenuBox>
      <MenuBox>
        <a href='/community'>
          <MenuIcon>
            <PiChatsCircle />
          </MenuIcon>
        </a>
      </MenuBox>
      <MenuBox>
      <a href='/search'>
      <MenuIcon>
        <FiSearch />
      </MenuIcon>
      </a>
      </MenuBox>
      {/* <MenuBox>
      <a href='/plusSquare'>
      <MenuIcon>
        <FiPlusSquare />
      </MenuIcon>
      </a>
      </MenuBox> */}
      <MenuBox>
      <a href='/heart'>
      <MenuIcon>
        <FiHeart />
      </MenuIcon>
      </a>
      </MenuBox>
      <MenuBox>
      <a href='/user'>
      <MenuIcon>
        <FiUser />
      </MenuIcon>
      </a>
      </MenuBox>
    </MenuBarContainer>
  );
};

export default MenuBar;