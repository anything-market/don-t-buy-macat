import React, { useState } from 'react';
import * as S from './headerModal.style';
import LogoutModal from './LogoutModal/LogoutModal';
export default function HeaderModal() {
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);

  const handleOpenLogoutModal = () => {
    setIsOpenLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setIsOpenLogoutModal(false);
  };
  return (
    <>
      <S.ModalContainer>
        <S.PanningBox>
          <S.PanningBar></S.PanningBar>
        </S.PanningBox>
        <S.ModalList>
          <li>
            <button>설정 및 개인정보</button>
          </li>
          <li onClick={handleOpenLogoutModal}>
            <button>로그아웃</button>
          </li>
        </S.ModalList>
      </S.ModalContainer>
      {isOpenLogoutModal && (
        <LogoutModal handleCloseLogoutModal={handleCloseLogoutModal} />
      )}
    </>
  );
}
