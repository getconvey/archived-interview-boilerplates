import React from 'react';
import styled from 'styled-components/macro';

import { lightGrey, grey, textGrey } from '../styles/Colors';
import { H3Style, H4Style, H5Style, H6Style } from '../styles/Headings';

import { STATUS_LABEL_MAP } from '../pages/ShipmentSummary';

import FedexLogoPNG from '../assets/img_Fedex.png';
import UPSLogoPNG from '../assets/img_ups.png';
import USPSLogoPNG from '../assets/img_usps.png';

const CARRIER_LOGO_MAP = {
  FedEx: FedexLogoPNG,
  UPS: UPSLogoPNG,
  USPS: USPSLogoPNG,
};

const formatTime = dateString => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options = { timeStyle: 'short', timeZone };
  return new Date(dateString).toLocaleString('en-US', options);
};

const EventSummary = ({ carrier = '', event = {} }) => {
  return (
    <EventContainer>
      <ColumnFlex>
        <CarrierLogo src={CARRIER_LOGO_MAP[carrier]} />
        <TimeText>{formatTime(event.createdDateTime)}</TimeText>
      </ColumnFlex>
      <ColumnFlex>
        <StatusText>{STATUS_LABEL_MAP[event.status]}</StatusText>
        {event.city && event.state && (
          <LocationText>{`${event.city}, ${event.state}`}</LocationText>
        )}
        <DescriptionText>{event.statusDesc}</DescriptionText>
      </ColumnFlex>
    </EventContainer>
  );
};

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 8px 0;
  padding: 16px;

  background-color: ${lightGrey};
  border-radius: 4px;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0 0 16px;

  margin: auto 0;

  &:first-child {
    border-right: 1px solid ${grey};
    padding: 0 16px 0 0;
  }
`;

const CarrierLogo = styled.img`
  max-width: 64px;
  height: auto;

  margin-bottom: 12px;
`;

const TimeText = styled.div`
  color: ${textGrey};
  ${H4Style}
`;

const StatusText = styled.div`
  ${H5Style}
`;

const LocationText = styled.div`
  ${H3Style}
`;

const DescriptionText = styled.div`
  ${H6Style}
`;

export default EventSummary;
