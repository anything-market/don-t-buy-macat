import React from 'react';
import styled from 'styled-components';
import tapHome from '../../assets/tab-icon-home.svg.svg';
import tabMessage from '../../assets/tab-icon-message.svg.svg';
import tabEdit from '../../assets/tab-icon-edit.svg.svg';
import tabUser from '../../assets/tab-icon-user.svg.svg';

const Wrapper = styled.div`
  margin-top: auto;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > p {
    color: ${(props) => props.theme.palette['mediumGray']};
    font-weight: 400;
    font-size: 1rem;
  }
`;

function NavigationBar() {
  return (
    <Wrapper>
      <FlexBox>
        <FlexItem>
          <img src={tapHome} />
          <p>홈</p>
        </FlexItem>
        <FlexItem>
          <img src={tabMessage} />
          <p>홈</p>
        </FlexItem>
        <FlexItem>
          <img src={tabEdit} />
          <p>홈</p>
        </FlexItem>
        <FlexItem>
          <img src={tabUser} />
          <p>홈</p>
        </FlexItem>
      </FlexBox>
    </Wrapper>
  );
}

export default NavigationBar;
