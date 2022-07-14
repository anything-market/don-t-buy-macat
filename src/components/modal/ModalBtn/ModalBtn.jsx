import React, { useState } from 'react';
import * as S from './modalBtn.style';
import Modal from '../Modal/Modal';
import BasicModalContent from '../BasicModalContent/BasicModalContent';
import CommentModalContent from '../CommentModalContent/CommentModalContent';
import ChatModalContent from '../ChatModalContent/ChatModalContent';
import PostModalContent from '../PostModalContent/PostModalContent';
export default function ModalBtn({ contents }) {
  //모달열기
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <button onClick={handleOpenModal}>
        <S.MoreIcon />
      </button>
      {/*기본 헤더 더보기 버튼이면 <ModalBtn contents="basic"/> */}
      {isOpenModal && contents === 'basic' && (
        <>
          <Modal setIsOpenModal={setIsOpenModal}>
            <BasicModalContent />
          </Modal>
        </>
      )}
      {/*채팅페이지 헤더의 더보기 버튼이면 <ModalBtn contents="chat"/> */}
      {isOpenModal && contents === 'chat' && (
        <>
          <Modal setIsOpenModal={setIsOpenModal}>
            <ChatModalContent />
          </Modal>
        </>
      )}
      {/*댓글의 더보기 버튼이면 <ModalBtn contents="comment"/> */}
      {isOpenModal && contents === 'comment' && (
        <>
          <Modal setIsOpenModal={setIsOpenModal}>
            <CommentModalContent />
          </Modal>
        </>
      )}
      {/* 게시물의 더보기 버튼이면 <ModalBtn contents="post"/> */}
      {isOpenModal && contents === 'post' && (
        <>
          <Modal setIsOpenModal={setIsOpenModal}>
            <PostModalContent />
          </Modal>
        </>
      )}
    </>
  );
}
