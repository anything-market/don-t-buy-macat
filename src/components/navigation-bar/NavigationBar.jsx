import React from 'react';
import styled from 'styled-components';
import tabHome from '../../assets/tab-icon-home.svg.svg';
import tabMessage from '../../assets/tab-icon-message.svg.svg';
import tabEdit from '../../assets/tab-icon-edit.svg.svg';
import tabUser from '../../assets/tab-icon-user.svg.svg';
import activeTabHome from '../../assets/tab-icon-home-color.svg.svg';
import activeTabMessage from '../../assets/tab-icon-message-color.svg.svg';
import activeTabEdit from '../../assets/tab-icon-edit-color.svg.svg';
import activeTabUser from '../../assets/tab-icon-user-color.svg.svg';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  margin-top: auto;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyleNavLink = styled(NavLink)`
  color: ${(props) => props.theme.palette['mediumGray']};
  font-weight: 400;
  font-size: 1rem;

  // NavLink가 active일 때 글씨색깔 변경
  &.active {
    color: ${(props) => props.theme.palette['point']};
  }
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  & > img {
    width: 2rem;
  }
`;

function NavigationBar() {
  return (
    <Wrapper>
      <NavBar>
        {/* 홈으로 이동 */}
        <StyleNavLink
          to={'/home'}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <List>
            <img
              src={location.pathname === '/home' ? activeTabHome : tabHome}
            />
            <p>홈</p>
          </List>
        </StyleNavLink>

        {/* 채팅으로 이동 (임시로 search페이지로 이동)*/}
        <StyleNavLink
          to={'/search'}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <List>
            <img
              src={
                location.pathname === '/search' ? activeTabMessage : tabMessage
              }
            />
            <p>채팅</p>
          </List>

          {/* 게시물 작성 페이지로 이동 */}
        </StyleNavLink>
        {/* post upload 페이지에서는 네비게이션 바 사라짐 */}
        <StyleNavLink
          to={'/upload'}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <List>
            <img
              src={location.pathname === '/upload' ? activeTabEdit : tabEdit}
            />
            <p>게시물 작성</p>
          </List>
        </StyleNavLink>

        {/* 프로필 페이지로 이동  (임시로 adoptPost페이지로 이동)*/}
        <StyleNavLink
          to={'/adoptPost'}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <List>
            <img
              src={location.pathname === '/adoptPost' ? activeTabUser : tabUser}
            />
            <p>프로필</p>
          </List>
        </StyleNavLink>
      </NavBar>
    </Wrapper>
  );
}

export default NavigationBar;
