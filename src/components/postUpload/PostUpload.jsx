import React, { useEffect } from 'react';
import * as S from './postUpload.style';
import { useRef, useState } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';

function PostUpload() {
  const Upload_Input = useRef();
  const [text, setText] = useState(''); //입력텍스트
  const [image, setImgfile] = useState([]); //이미지
  const [imageUrl, setImageUrl] = useState('');
  const [isValid, setIsValid] = useState(false);

  //입력창에 글을 쓰면 이벤트발생
  const handleChangeText = (e) => {
    setText(e.target.value);
    e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  //텍스트 또는 미리보기이미지가 있으면 활성화
  useEffect(() => {
    if (text || imageUrl) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [text, imageUrl]);

  //이미지 미리보기
  const handleChangeFile = (e) => {
    const Blob = e.target.files[0];
    // image를 Blob객체들이 들어있는 배열들로 할당해줍니다
    setImgfile((prevState) => [...prevState, Blob]);
    if (Blob === undefined) {
      return;
    }
    const reader = new FileReader(); //파일을 읽을수 있는 reader 생성(인스턴스)
    reader.readAsDataURL(Blob); //Blob 을 읽은 뒤 base64로 인코딩
    e.target.value = '';
    return new Promise((resolve) => {
      //FileReader가 성공적으로 파일을 읽으면
      reader.onload = () => {
        //load 이벤트의 핸들러. 이 이벤트는 읽기 동작이 성공적으로 완료되었을 때마다 발생한다.
        setImageUrl((imageUrl) => [...imageUrl, reader.result]); //이미지 프리뷰,FileReader 인스턴스의 result라는 속성에 담음
        resolve();
      };
    });
  };

  return (
    <S.PostUploadWrapper>
      {/* isValid상태를 전달해줄께 */}
      <UploadHeader isValid={isValid} />
      <S.PostUploadFieldSet>
        <S.PostUploadLegend className="A11yHidden">
          게시글 작성 페이지
        </S.PostUploadLegend>
        <S.ProfileImage />
        <S.PostForm>
          <S.PostUploadLegendTxt className="A11yHidden">
            게시글을 입력하세요
          </S.PostUploadLegendTxt>
          <S.PostUploadTextarea
            name="postTxt"
            id="postTxt"
            type="text"
            onChange={handleChangeText}
            // onKeyUp={changeButton}
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
