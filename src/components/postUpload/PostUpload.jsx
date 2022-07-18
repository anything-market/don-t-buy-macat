import React from 'react';
import * as S from './postUpload.style';
import { useRef, useState } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';

function PostUpload() {
  const Upload_Input = useRef();
  const [text, setText] = useState(''); //입력텍스트
  const [imageUrl, setImageUrl] = useState('');

  //입력창에 글을 쓰면 이벤트발생
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  //이미지 미리보기
  const handleChangeFile = (e) => {
    const Blob = e.target.files[0];
    if (Blob === undefined) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(Blob);
    e.target.value = '';
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageUrl((imageUrl) => [...imageUrl, reader.result]);
        resolve();
      };
    });
  };

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
            onChange={handleChangeText}
            maxLength="200"
            placeholder={'게시글 입력하기...'}
          />
          <S.PostFormContainer>
            {imageUrl &&
              imageUrl.map((index, key) => (
                <S.PreviewImage key={key} src={index} alt="" />
              ))}
            <S.UploadImg className="A11yHidden">
              게시글 이미지 업로드
            </S.UploadImg>
            <S.UploadInput
              className="A11yHidden"
              ref={Upload_Input}
              type="file"
              accept="image/*"
              onChange={handleChangeFile}
            />
            <S.ImgUploadBtn
              onClick={
                () =>
                  imageUrl.length === 3
                    ? alert('이미지는 3개까지만 업로드할 수 있습니다.')
                    : Upload_Input.current.click() //이 버튼을 클릭하면 file input을 클릭한겁니다.이벤트위임을 받았다
              }
            />
          </S.PostFormContainer>
        </S.PostForm>
      </S.PostUploadFieldSet>
    </S.PostUploadWrapper>
  );
}

export default PostUpload;
