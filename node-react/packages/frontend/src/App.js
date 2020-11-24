import React, { useState } from 'react';
import styled from 'styled-components';

import ShipmentSummary from './pages/ShipmentSummary';
import OrderSummaryOverlay from './components/OrderSummaryOverlay';

import ShipmentData from './mock_data/shipments.json';
import OrderData from './mock_data/orders.json';

function App() {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  return (
    <AppContainer id="app-container">
      <ShipmentSummary
        OrderData={OrderData}
        ShipmentData={ShipmentData}
        onFullOrderClick={() => setShowOrderSummary(true)}
      />
      {showOrderSummary && <OrderSummaryOverlay />}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default App;
