import React, { useState } from 'react';
import SearchHeader from './../../components/header/SearchHeader/SearchHeader';
import SearchUserList from '../../components/search/SearchUserList/SearchUserList';
import * as S from './Search.style';

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  return (
    <>
      <SearchHeader />
      <S.SearchListWrap>
        {searchData.length === 0 || !searchData
          ? null
          : searchData.map((user) => {
              return (
                <SearchUserList
                  key={Math.random() * 100}
                  image={user.image}
                  accountname={user.accountname}
                  username={user.username}
                />
              );
            })}
      </S.SearchListWrap>
    </>
  );
};

export default Search;
