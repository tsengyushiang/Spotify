import styled from "styled-components";

import { ISMOBILE, ISTABLET } from "../../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;

  padding: 17px 0px;

  ${ISMOBILE} {
    width: 50%;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.05em;
  color: #eeeeee;

  padding-bottom: 6px;

  ${ISTABLET} {
    font-size: 16px;
  }
`;

export const Item = styled.div`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.05em;
  color: #acafb8;

  flex: 1;
  padding: 6px 0px;

  ${ISTABLET} {
    font-size: 14px;
  }
`;
