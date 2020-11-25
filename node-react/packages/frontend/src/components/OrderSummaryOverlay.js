import React from 'react';
import styled from 'styled-components';

import ShipmentCard from './ShipmentCard';

import { alphaGrey, grey } from '../styles/Colors';
import { H1Style } from '../styles/Headings';

import closeSVG from '../assets/ic_close.svg';
import { MQ_FOR_MOBILE } from '../styles/MediaQueries';

const OrderSummaryOverlay = ({
  shipments = [],
  onCloseOderSummary = () => {},
  onSetSelectedShipmentId = () => {},
}) => {
  return (
    <Container
      onClick={evt => {
        // clicking outside of the modal also closes it
        if (!document.getElementById('order-summary-modal').contains(evt.target)) {
          onCloseOderSummary();
        }
      }}
    >
      <ModalContainer id="order-summary-modal">
        <Header>
          <Title>Order Overview</Title>
          <CloseIcon src={closeSVG} onClick={onCloseOderSummary} />
        </Header>
        <Content>
          {shipments.map(shipment => (
            <ShipmentCard
              key={shipment.id}
              shipment={shipment}
              onSetSelectedShipmentId={onSetSelectedShipmentId}
            />
          ))}
        </Content>
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;

  background-color: ${alphaGrey};

  z-index: 15;
`;

const ModalContainer = styled.div`
  position: absolute;

  right: 0;
  top: 0;

  width: 400px;
  height: 100%;

  background-color: white;
  border: 1px solid ${grey};

  ${MQ_FOR_MOBILE} {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  padding: 24px 16px;

  box-sizing: border-box;

  border-bottom: 1px solid ${grey};
`;

const Title = styled.div`
  ${H1Style}
`;

const CloseIcon = styled.img`
  right: 0;

  margin-left: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 16px 24px;

  box-sizing: border-box;
`;

export default OrderSummaryOverlay;
