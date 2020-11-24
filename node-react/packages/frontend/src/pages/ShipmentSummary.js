import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';

import { grey, lightGrey } from '../styles/Colors';
import { H1Style, H2Style, H3Style } from '../styles/Headings';

import pickupsSVG from '../assets/ic_pickups.svg';

const STATUS_MAP = {
  in_transit: 'In Transit',
};

const formatDate = dateString => {
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleString('en-US', options);
};

const ShipmentSummary = ({ ShipmentData = {}, onFullOrderClick = () => {} }) => {
  const firstShipment = ShipmentData[0];
  const totalItems = ShipmentData.reduce((accumulator, shipment) => {
    if (shipment) {
      accumulator += shipment.quantity || 1; // assuming 1 for shipments with no 'quantity' field
    }

    return accumulator;
  }, 0);

  return (
    <Container>
      <NavBar />
      <InnerContainer>
        <ItemsIncludedContainer>
          <ShipmentItemsText>
            {`This shipment includes ${firstShipment.quantity} of your ${totalItems} items. `}
          </ShipmentItemsText>
          <FullOrderLinkText onClick={onFullOrderClick}>See Full Order</FullOrderLinkText>
        </ItemsIncludedContainer>
        <SummaryContainer>
          <StatusContainer>
            <StatusBorder>
              <StatusImg src={pickupsSVG} />
            </StatusBorder>
            <StatusText>{STATUS_MAP[firstShipment.status]}</StatusText>
            <EsitmatedDeliveryText>
              {`Estimated Delivery: `}
              <DeliveryDateText>
                {formatDate(firstShipment.dates.estimatedDeliveryDate)}
              </DeliveryDateText>
            </EsitmatedDeliveryText>
          </StatusContainer>
        </SummaryContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${lightGrey};
  width: 100%;
`;

const InnerContainer = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const SummaryContainer = styled.div`
  background-color: white;
  border: 1px solid ${grey};
`;

const StatusContainer = styled.div`
  border-bottom: 1px solid ${grey};

  padding: 24px;
`;

const ItemsIncludedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  box-sizing: border-box;

  width: 100%;
  padding: 16px;

  justify-content: center;
`;

const ShipmentItemsText = styled.div`
  margin: auto 0;
  white-space: pre;
  text-align: center;

  ${H3Style}
`;

const FullOrderLinkText = styled.div`
  text-decoration: underline;

  ${H1Style}

  &:hover {
    cursor: pointer;
  }
`;

const StatusImg = styled.img`
  padding: 18px 16px;
`;

const StatusBorder = styled.div`
  width: 64px;
  height: 64px;

  border: 5px solid ${grey};
  border-radius: 50%;

  margin: auto;
`;

const StatusText = styled.div`
  margin: 16px 0;
  text-align: center;

  ${H1Style}
`;

const EsitmatedDeliveryText = styled.div`
  display: flex;
  flex-direction: row;

  white-space: pre;
  text-align: center;
  justify-content: center;

  ${H2Style}
`;

const DeliveryDateText = styled.div`
  ${H2Style}

  font-weight: 500;
`;

export default ShipmentSummary;
