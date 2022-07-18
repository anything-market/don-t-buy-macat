import React from 'react';
import * as S from './postUpload.style';
import UploadHeader from '../header/UploadHeader/UploadHeader';

function PostUpload() {
  return (
    <S.PostUploadWrapper>
      <UploadHeader />
      <S.PostUploadFieldSet>
        <S.PostUploadLegend className="A11yHidden">
          게시글 작성 페이지
        </S.PostUploadLegend>
        <S.ProfileImage />
        <S.PostForm>
          <S.PostUploadLegendTxt className="A11yHidden">
            게시글을 입력하세요
          </S.PostUploadLegendTxt>
          <textarea
            name="postTxt"
            id="postTxt"
            type="text"
            // onChange={handleChangeText}
            maxLength="200"
            placeholder={'게시글 입력하기...'}
          />
          <S.PostFormContainer>
            <S.PreviewImage src="" alt="" />
            <S.UploadImg className="A11yHidden">
              게시글 이미지 업로드
            </S.UploadImg>
            <S.UploadInput
              className="A11yHidden"
              // ref={Upload_Input}
              type="file"
              accept="image/*"
              // onChange={handleChangeFile}
            />
            <S.ImgUploadBtn />
          </S.PostFormContainer>
        </S.PostForm>
      </S.PostUploadFieldSet>
    </S.PostUploadWrapper>
  );
}

export default PostUpload;
