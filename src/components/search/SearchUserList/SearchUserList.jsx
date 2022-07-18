import React from 'react';
import * as S from './SearchUserList.style.jsx';
import UserComponent from './../../userComponent/UserComponent';

const SearchUserList = ({ image, username, accountname }) => {
  return (
    <S.SearchUserListWrap>
      <UserComponent
        image={image}
        username={username}
        accountname={accountname}
      />
    </S.SearchUserListWrap>
  );
};

export default SearchUserList;
