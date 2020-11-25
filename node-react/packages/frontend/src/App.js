import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ShipmentSummary from './pages/ShipmentSummary';
import OrderSummaryOverlay from './components/OrderSummaryOverlay';

import ShipmentData from './mock_data/shipments.json';
import OrderData from './mock_data/orders.json';

function App() {
  const [orderSummaryNumber, setOrderSummaryNumber] = useState(-1);
  const [selectedShipmentId, setSelectedShipmentId] = useState(ShipmentData[0].id);

  const orderShipments = ShipmentData.filter(
    shipment => shipment.orderNumber === orderSummaryNumber,
  );

  return (
    <AppContainer id="app-container">
      <ShipmentSummary
        OrderData={OrderData}
        ShipmentData={ShipmentData}
        selectedShipmentId={selectedShipmentId}
        onFullOrderClick={orderNumber => setOrderSummaryNumber(orderNumber)}
      />
      {orderSummaryNumber > 0 && (
        <OrderSummaryOverlay
          shipments={orderShipments}
          onCloseOderSummary={() => setOrderSummaryNumber(-1)}
          onSetSelectedShipmentId={shipmentId => {
            setSelectedShipmentId(shipmentId);
            setOrderSummaryNumber(-1);
          }}
        />
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export default App;
