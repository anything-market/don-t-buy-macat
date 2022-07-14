import React from 'react';
import * as S from './postUpload.style';
import UploadHeader from '../header/UploadHeader/UploadHeader';
import { A11yHidden } from '../../styles/common.style';

function PostUpload() {
  return (
    <S.PostUploadWrapper>
      <UploadHeader />
      <S.PostUploadFieldSet>
        <A11yHidden>
          <legend>게시글 작성 페이지</legend>
        </A11yHidden>
        <S.ProfileImage />
        <S.PostForm>
          <A11yHidden>
            <h4>게시글을 입력하세요</h4>
          </A11yHidden>
          <textarea
            name="postTxt"
            id="postTxt"
            type="text"
            // onChange={handleChangeText}
            maxLength="200"
            placeholder={'게시글 입력하기...'}
          />
          <S.PostFormContainer>
            <S.PreviewImageList>
              <S.PreviewImageItem>
                <S.PreviewImage src="" alt="" />
              </S.PreviewImageItem>
            </S.PreviewImageList>
            <A11yHidden>
              <h4>게시글 이미지 업로드</h4>
            </A11yHidden>
            <S.UploadImgIcon htmlFor="fileInput" />
            <A11yHidden>
              <input
                type="file"
                className="PostUploadImageInput"
                id="fileInput"
                accept="image/*"
                // onChange={handleChangeFile}
              />
            </A11yHidden>
          </S.PostFormContainer>
        </S.PostForm>
      </S.PostUploadFieldSet>
    </S.PostUploadWrapper>
  );
}

export default PostUpload;
