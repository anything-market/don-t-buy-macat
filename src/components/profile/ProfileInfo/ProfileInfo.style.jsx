import styled from 'styled-components';
import { ReactComponent as ShareIco } from '../../../assets/icon-share.svg';
import { ReactComponent as MessageIco } from '../../../assets/message-circle.svg';

export const ProfileBg = styled.div`
  display: block;
  background-color: ${({ myProfile }) =>
    myProfile
      ? (props) => props.theme.palette['white']
      : (props) => props.theme.palette['primary']};
  margin-bottom: 0.6rem;
`;
export const ProfileInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid ${(props) => props.theme.palette['border']};
`;

export const ProfileInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 16px 26px;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const UserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
`;

export const AccountName = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.palette['darkGray']};
  margin-bottom: 16px;
`;

export const Intro = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.palette['darkGray']};
  margin-bottom: 24px;
`;

export const Follow = styled.a`
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 65px;
  text-align: center;
  cursor: pointer;
  left: ${(props) => (props.position === 'right' ? '56px' : '287px')};
`;

export const FollowCount = styled.strong`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 6px;
  color: ${(props) =>
    props.type === 'follows'
      ? (props) => props.theme.palette['black']
      : (props) => props.theme.palette['darkGray']};
`;

export const FollowSpan = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => props.theme.palette['darkGray']};
`;

export const ProfileBtnWrap = styled.div`
  display: flex;
`;

export const ProfileBtn = styled.button`
  border: 1px solid ${(props) => props.theme.palette['border']};
  color: ${(props) => props.theme.palette['darkGray']};
  width: ${({ adoptBtn }) => (adoptBtn ? '100px' : '120px')};
  height: 34px;
  border-radius: 30px;
  margin-left: ${({ adoptBtn }) => (adoptBtn ? '12px' : '0')};
`;

export const ProfileBtnIco = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid ${(props) => props.theme.palette['darkGray']};
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette['white']};
  margin-right: ${({ messageIco }) => (messageIco ? '10px' : '0')};
  margin-left: ${({ shareIco }) => (shareIco ? '10px' : '0')};
`;

export const StyledMessageIco = styled(MessageIco)`
  stroke: ${(props) => props.theme.palette['darkGray']};
  fill: ${(props) => props.theme.palette['white']};
  stroke-width: 1.5;
  width: 2rem;
  height: 2rem;
`;

export const StyledShareIco = styled(ShareIco)`
  stroke-width: 1.5;
  width: 2rem;
  height: 2rem;
`;
