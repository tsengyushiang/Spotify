import styled from "styled-components";

import { ISMOBILE, ISTABLET } from "../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 35px;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: #f59e00;
  padding: 10px;
`;
export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #020d37;
  padding: 10px;

  ${ISMOBILE} {
    font-size: 20px;
  }
`;
export const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  margin: 25px;

  width: 966px;

  ${ISTABLET} {
    width: 644px;
  }

  ${ISMOBILE} {
    width: 287px;
  }
`;

export const DotWrapper = styled.div`
  display: flex;
`;
export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
  margin: 5px;
  background: #eeeeee;
`;
