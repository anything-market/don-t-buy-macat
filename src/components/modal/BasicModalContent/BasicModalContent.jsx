import React, { useState } from 'react';
import LogoutAlert from '../alert/LogoutAlert/LogoutAlert';
export default function BasicModalContent() {
  //alert창 열기
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const handleOpenAlert = () => {
    setIsOpenAlert(!isOpenAlert);
  };

  return (
    <>
      <li>
        <button>설정 및 개인정보</button>
      </li>
      <li>
        <button onClick={handleOpenAlert}>로그아웃</button>
      </li>
      {isOpenAlert && <LogoutAlert handleOpenAlert={handleOpenAlert} />}
    </>
  );
}
