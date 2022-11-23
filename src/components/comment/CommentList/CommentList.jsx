/* eslint-disable react/prop-types */
import React from 'react';
import ModalBtn from '../../modal/ModalBtn/ModalBtn';
import CommentModalContent from '../../modal/modalContent/CommentModalContent/CommentModalContent';
import { timeForToday } from '../../../utils/timeForToday';
import * as S from './commentList.style';

function CommentList({ comments }) {
  return (
    <S.CommentListWrapper>
      <S.CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <S.CommentListLi key={data.id}>
                <S.ProfileImg src={data.author.image} />
                <S.InformationBox>
                  <span>{data.author.username}</span>
                  <small>{timeForToday(data.createdAt)}</small>
                </S.InformationBox>
                <S.ModalBtnBox>
                  <ModalBtn>
                    <CommentModalContent />
                  </ModalBtn>
                </S.ModalBtnBox>
                <S.CommentText>{data.content}</S.CommentText>
              </S.CommentListLi>
            );
          })}
      </S.CommentListContainer>
    </S.CommentListWrapper>
  );
}

export default CommentList;
