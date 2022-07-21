import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchHeader from './../../components/header/SearchHeader/SearchHeader';
import SearchUserList from './../../components/search/SearchUserList/SearchUserList';
import * as S from './Search.style';

const Search = () => {
  const [userToken, setUserToken] = useState();
  const [searchData, setSearchData] = useState([]);

  // get user token when component first mounted
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  const getSearchData = async (searchTerm) => {
    await axios({
      method: 'get',
      url: `http://146.56.183.55:5050/user/searchuser/?keyword=${searchTerm}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    }).then((response) => {
      setSearchData(response.data);
    });
  };

  const onTyping = (searchTerm) => {
    !searchTerm ? setSearchData('') : getSearchData(searchTerm);
  };

  return (
    <>
      <SearchHeader onTyping={onTyping} />
      <S.SearchListWrap>
        <S.SearchResultWrap>
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
        </S.SearchResultWrap>
      </S.SearchListWrap>
    </>
  );
};

export default Search;
