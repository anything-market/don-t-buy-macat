import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../modal/Modal/Modal';
import LogoutAlert from '../../modal/HeaderModal/LogoutAlert/LogoutAlert';
import * as S from './basicHeader.style';

export default function BasicHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  //모달열기
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  //alert창 열기
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const handleOpenAlert = () => {
    setIsOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };
  return (
    <>
      <S.BasicHeaderLayout>
        <button onClick={handleGoPrev}>
          <S.ArrowLeftIcon />
        </button>
        <button onClick={handleOpenModal}>
          <S.MoreIcon />
        </button>
      </S.BasicHeaderLayout>
      {isOpenModal && (
        <>
          <Modal
            setIsOpenModal={setIsOpenModal}
            setIsOpenAlert={setIsOpenAlert}
          >
            <li>
              <button>설정 및 개인정보</button>
            </li>
            <li>
              <button onClick={handleOpenAlert}>로그아웃</button>
            </li>
          </Modal>
          {isOpenAlert && <LogoutAlert handleCloseAlert={handleCloseAlert} />}
        </>
      )}
    </>
  );
}
