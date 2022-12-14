import styled from "styled-components";

import { Icon } from "../../../styles/Icon";
import { ISMOBILE, ISTABLET } from "../../../styles/RWD";

export const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin: 15px;
  flex-shrink: 0;

  width: calc(33% - 30px);

  ${ISTABLET} {
    width: calc(50% - 30px);
  }

  ${ISMOBILE} {
    width: calc(100% - 30px);
  }
`;
export const Comma = styled(Icon)`
  margin-top: 23px;
`;
export const Message = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #4c526a;

  max-width: 265px;
  padding-top: 18px;
`;
export const Photo = styled(Icon)`
  margin-top: 25px;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #020d37;

  padding-top: 15px;
`;
export const JobTilte = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #acafb8;

  padding-top: 5px;
  padding-bottom: 24px;
`;
