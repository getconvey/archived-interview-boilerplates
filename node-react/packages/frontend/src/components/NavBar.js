import React from 'react';
import styled from 'styled-components';
import DisplayToggle from './DisplayToggle';

import { grey } from '../styles/Colors';
import { QUERY_FOR_MOBILE, MQ_FOR_MOBILE } from '../styles/MediaQueries';
import { H4Style } from '../styles/Headings';

import DeerreedLogoPNG from '../assets/Deerreed_logo.png';
import menuSVG from '../assets/ic_menu.svg';

const MENU_ITEMS = ['Men', 'Women', 'Kids', 'Home', 'Sale', 'Get Help'];

const renderMobile = () => (
  <React.Fragment>
    <InnerContainer>
      <Logo src={DeerreedLogoPNG} />
      <Menu src={menuSVG} /> {/* should have an onClick handler but not part of the requirements */}
    </InnerContainer>
  </React.Fragment>
);

const renderDesktop = () => (
  <InnerContainer>
    <Logo src={DeerreedLogoPNG} />
    <MenuItemsContainer>
      {MENU_ITEMS.map((item, index) => (
        /* this key isn't perfect, if there are multiple items
          with the same string and one of them gets removed then they
          could end up with the same key. But it's not
          performance-critical so it's good enough.
        */
        <MenuItem key={item + index}>{item}</MenuItem>
      ))}
    </MenuItemsContainer>
  </InnerContainer>
);

export const NavBar = () => {
  return (
    <Container>
      <DisplayToggle query={QUERY_FOR_MOBILE}>
        {renderMobile()}
        {renderDesktop()}
      </DisplayToggle>
    </Container>
  );
};

const Container = styled.div`
  // this allows the nav bar to position things below it without the need to calculate its height
  // and still remain at the top when scrolling
  position: sticky;
  width: 100%;
  box-sizing: border-box;

  left: 0;
  top: 0;

  background-color: white;
  border-bottom: 1px solid ${grey};

  padding: 24px;

  z-index: 10;

  ${MQ_FOR_MOBILE} {
    padding: 16px 24px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 1024px;
  margin: auto;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  min-width: 500px;
`;

const MenuItem = styled.div`
  ${H4Style}

  margin: auto;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;

  ${MQ_FOR_MOBILE} {
    width: 64px;
  }
`;

const Menu = styled.img`
  width: 24px;
  height: auto;
`;

export default NavBar;
