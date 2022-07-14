import React, { useState } from 'react';
// import ProductDeleteAlert from '../HeaderModal/LogoutAlert/LogoutAlert';
import PostDeleteAlert from '../alert/PostDeleteAlert/PostDeleteAlert';
export default function ProductModalContent() {
  //alert창 열기
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const handleOpenAlert = () => {
    setIsOpenAlert(!isOpenAlert);
  };

  return (
    <>
      <li>
        <button onClick={handleOpenAlert}>삭제</button>
      </li>
      <li>
        <button>수정</button>
      </li>
      {isOpenAlert && <PostDeleteAlert handleOpenAlert={handleOpenAlert} />}
    </>
  );
}
