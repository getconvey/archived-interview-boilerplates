import React from 'react';
import styled from 'styled-components/macro';

import NavBar from '../components/NavBar';
import ProgressCircle from '../components/ProgressCircle';
import EventSummary from '../components/EventSummary';
import PrimaryCTA from '../components/PrimaryCTA';

import { grey, lightGrey } from '../styles/Colors';
import { H1Style, H2Style, H3Style } from '../styles/Headings';
import { MQ_FOR_MOBILE } from '../styles/MediaQueries';

import { formatDate, isSameDay } from '../utils/utils';

import pickupsSVG from '../assets/ic_pickups.svg';
import promoPNG from '../assets/img_Promo.png';

export const STATUS_LABEL_MAP = {
  in_transit: 'In Transit',
  scheduled: 'Scheduled',
};

const STATUS_PERCENT_MAP = {
  in_transit: 0.75,
  scheduled: 0.25,
};

const ShipmentSummary = ({
  ShipmentData = {},
  onFullOrderClick = () => {},
  selectedShipmentId = -1,
}) => {
  // TODO: if !selectedShipmentId either render error message or redirect somewhere
  const shipment = ShipmentData.find(shipment => shipment.id === selectedShipmentId);
  const totalItems = ShipmentData.reduce((accumulator, shipment) => {
    if (shipment && shipment.orderNumber === shipment.orderNumber) {
      accumulator += shipment.quantity || 1; // assuming 1 for shipments with no 'quantity' field
    }

    return accumulator;
  }, 0);

  let mostRecentEventDate = null;

  return (
    <Container>
      <NavBar />
      <Column>
        <ItemsIncludedContainer>
          <ShipmentItemsText>
            {`This shipment includes ${shipment.quantity} of your ${totalItems} items. `}
          </ShipmentItemsText>
          <FullOrderLinkText onClick={() => onFullOrderClick(shipment.orderNumber)}>
            See Full Order
          </FullOrderLinkText>
        </ItemsIncludedContainer>
        <InnerContainer>
          <SummaryContainer>
            <StatusContainer>
              <ProgressCircle percent={STATUS_PERCENT_MAP[shipment.status]}>
                <StatusImg src={pickupsSVG} />
              </ProgressCircle>
              <StatusText>{STATUS_LABEL_MAP[shipment.status]}</StatusText>
              <EsitmatedDeliveryText>
                {`Estimated Delivery: `}
                <DeliveryDateText>
                  {formatDate(shipment.dates.estimatedDeliveryDate)}
                </DeliveryDateText>
              </EsitmatedDeliveryText>
            </StatusContainer>
            <EventsContainer>
              {/* TODO: Today, Yesterday, Nov 19 in between events from different days */}
              {shipment.events.map(event => {
                let eventDateText = '';
                const eventDate = new Date(event.createdDateTime);
                if (!isSameDay(eventDate, mostRecentEventDate)) {
                  eventDateText = formatDate(eventDate);
                  mostRecentEventDate = eventDate;
                }

                return (
                  <React.Fragment key={event.createdDateTime}>
                    {eventDateText && <EventDateText>{eventDateText}</EventDateText>}
                    <EventSummary carrier={shipment.carrier} event={event} />
                  </React.Fragment>
                );
              })}
            </EventsContainer>
          </SummaryContainer>
          {/* opening in a new tab since it seems more user-friendly */}
          <PromoImage
            src={promoPNG}
            onClick={() => {
              window.open('https://www.getconvey.com', '_blank');
            }}
          />
        </InnerContainer>
        <PrimaryCTA onClick={onFullOrderClick}>See all items in your order</PrimaryCTA>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${lightGrey};
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  margin: auto auto 24px auto;

  padding: 8px;
  box-sizing: border-box;

  ${MQ_FOR_MOBILE} {
    flex-direction: column;
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 64px;
`;

const SummaryContainer = styled.div`
  width: 50%;

  background-color: white;
  border: 1px solid ${grey};

  ${MQ_FOR_MOBILE} {
    width: 100%;
  }
`;

const StatusContainer = styled.div`
  border-bottom: 1px solid ${grey};

  padding: 24px;
`;

const EventsContainer = styled.div`
  padding: 24px 24px 48px;
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

const EventDateText = styled.div`
  ${H2Style}
`;

const StatusImg = styled.img`
  padding: 18px 16px;
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

const PromoImage = styled.img`
  width: 50%;
  max-width: 100%;
  height: auto;

  margin: 0 auto 0 24px;

  cursor: pointer;

  ${MQ_FOR_MOBILE} {
    margin: 16px 0 auto;
    width: 100%;
  }
`;

export default ShipmentSummary;
