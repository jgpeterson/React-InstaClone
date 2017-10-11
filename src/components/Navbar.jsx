import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Header = styled.div`
background-color: blue;
display: flex;
justify-content: space-between`;

class Navbar extends Component{
  render(){
    return (
      <Header>
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch/>
        <div>
        <input type="text"/>
        </div>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </Header>
    );
  }
}

export default Navbar