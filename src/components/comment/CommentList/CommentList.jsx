/* eslint-disable react/prop-types */
import React from 'react';
import ModalBtn from '../../modal/ModalBtn/ModalBtn';
import CommentModalContent from '../../modal/modalContent/CommentModalContent/CommentModalContent';
import { timeForToday } from '../../../utils/timeForToday';

import {
  CommentListWrapper,
  CommentListContainer,
  CommentListLi,
  ProfileImg,
  InformationBox,
  CommentText,
  ModalBtnBox,
} from './commentList.style';

function CommentList({ comments }) {
  return (
    <CommentListWrapper>
      <CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <CommentListLi key={data.id}>
                <ProfileImg src={data.author.image} />
                <InformationBox>
                  <span>{data.author.username}</span>
                  <small>{timeForToday(data.createdAt)}</small>
                </InformationBox>
                <ModalBtnBox>
                  <ModalBtn>
                    <CommentModalContent />
                  </ModalBtn>
                </ModalBtnBox>
                <CommentText>{data.content}</CommentText>
              </CommentListLi>
            );
          })}
      </CommentListContainer>
    </CommentListWrapper>
  );
}

export default CommentList;
