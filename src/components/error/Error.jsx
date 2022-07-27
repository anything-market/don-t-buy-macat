import React from 'react';
import { ErrorWrapper, ErrorIcon, ErrorText, PreButton } from './error.style';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <ErrorWrapper>
      <ErrorIcon />
      <ErrorText>페이지를 찾을 수 없습니다. :(</ErrorText>
      <PreButton onClick={() => navigate('/')}>홈으로 이동</PreButton>
    </ErrorWrapper>
  );
}

export default Error;
