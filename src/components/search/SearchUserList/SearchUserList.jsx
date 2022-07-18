import React from 'react';
import * as S from './SearchUserList.style.jsx';

const SearchUserList = ({ image, username, accountname }) => {
  return (
    <S.SearchUserListWrap>
      <img src={image} alt="" style={{ width: '30px', height: '30px' }} />
      <strong>{username}</strong>
      <strong>{accountname}</strong>
    </S.SearchUserListWrap>
  );
};

export default SearchUserList;
