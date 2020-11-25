import React from 'react';
import styled from 'styled-components/macro';

import PrimaryCTA from './PrimaryCTA';

import { grey, textGrey } from '../styles/Colors';
import { H1Style, H3Style, H7Style } from '../styles/Headings';

import { formatDate } from '../utils/utils';

const ShipmentCard = ({ shipment = {}, onSetSelectedShipmentId = () => {} }) => (
  <Container>
    <EstimatedText>Estimated Delivery</EstimatedText>
    <DateText>{formatDate(shipment.dates.estimatedDeliveryDate)}</DateText>
    <Row>
      <DataText>Quantity</DataText>
      <DataText>{shipment.quantity}</DataText>
    </Row>
    <Row>
      <DataText>Ref #</DataText>
      <DataText>{shipment.referenceNumber}</DataText>
    </Row>
    <Row>
      <DataText>Description</DataText>
      <DataText>{shipment.description}</DataText>
    </Row>

    <Row>
      <Button onClick={() => onSetSelectedShipmentId(shipment.id)}>See Tracking Details</Button>
    </Row>
  </Container>
);

const Container = styled.div`
  padding: 16px 0;

  border-bottom: 1px solid ${grey};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

const DataText = styled.div`
  max-width: 50%;

  &:nth-child(2) {
    text-align: right;
  }

  ${H3Style}
`;

const EstimatedText = styled.div`
  color: ${textGrey};
  text-transform: uppercase;

  ${H7Style}
`;
const DateText = styled.div`
  margin-bottom: 24px;

  ${H1Style}
`;

const Button = styled(PrimaryCTA)`
  margin-top: 16px;
`;

export default ShipmentCard;
