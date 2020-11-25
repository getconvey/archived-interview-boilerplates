import React from 'react';
import styled from 'styled-components';

import { grey, brightBlue } from '../styles/Colors';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const ProgressCircle = ({ percent = 0, children = [] }) => {
  return (
    <StatusBorder>
      <StatusBarRightClip>
        <StatusBarRight percent={percent} />
      </StatusBarRightClip>
      <StatusBarLeftClip>
        <StatusBarLeft percent={percent} />
      </StatusBarLeftClip>
      {children}
    </StatusBorder>
  );
};

const StatusBorder = styled.div`
  position: relative;
  width: 64px;
  height: 64px;

  border: 10px solid ${grey};
  border-radius: 50%;

  margin: auto;
`;

const StatusBarRightClip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  clip-path: inset(-20% -20% -20% 50%);
`;

const StatusBarLeftClip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  clip-path: inset(-20% 50% -20% -20%);
`;

const StatusBarRight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -10px;
  left: -10px;

  border: 10px solid ${brightBlue};
  border-radius: 50%;

  clip: rect(0, 42px, 84px, 0);
  transform: rotate(${props => clamp(props.percent * 2, 0, 1) * 180}deg);
`;

const StatusBarLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -10px;
  left: -10px;

  border: 10px solid ${brightBlue};
  border-radius: 50%;

  clip: rect(0px, 42px, 84px, 0px);
  transform: rotate(${props => clamp((props.percent - 0.5) * 2, 0, 1) * 180}deg) scaleX(-1);
`;

export default ProgressCircle;
