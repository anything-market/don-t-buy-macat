import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import * as S from './postUpload.style';
import { useRef, useState } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';

function PostUpload() {
  const Upload_Input = useRef();
  const navigate = useNavigate();
  const [text, setText] = useState(''); //입력텍스트
  const [image, setImgfile] = useState([]); //이미지
  const [imageUrl, setImageUrl] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [userToken, setUserToken] = useState();

  // 컴포넌트가 처음 마운트될때 userToken을 받아옵니다
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  //텍스트 또는 미리보기이미지가 있으면 활성화
  useEffect(() => {
    if (text || imageUrl) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [text, imageUrl]);

  //입력창에 글을 쓰면 이벤트발생
  const handleChangeText = (e) => {
    setText(e.target.value);
    // e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

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

  //이미지 변환해주는 함수
  const imageUpload = async (files, index) => {
    //호출한부분 파일을 뭘 선택했는지
    const formData = new FormData();
    formData.append('image', files[index]);
    try {
      const res = await axios.post(
        `http://146.56.183.55:5050/image/uploadfile`,
        formData,
      );
      return res.data['filename'];
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  // 게시글 업로드 POST 요청보내는 함수
  async function createPost() {
    const imageUrls = [];
    const files = image;
    //이미지가 있는 경우에
    for (let index = 0; index < files.length; index++) {
      //이미지 변환해주는 함수를 여기서 실행
      const imgurl = await imageUpload(files, index); //const files = image; 사용자가 선택한 파일
      imageUrls.push(`http://146.56.183.55:5050/${imgurl}`);
    }
    try {
      const res = await axios({
        url: `http://146.56.183.55:5050/post`,
        method: 'post',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        data: {
          post: {
            content: text,
            image: imageUrls + '',
            // imageUrls를 string형식으로 형변환하여 요청 보냅니다
          },
        },
      });
      console.log('포스트 업로드 성공');
      console.log(res);
      //사용자프로필 완료되면 추후 사용자 프로필페이지로 이동
      navigate('/home');
    } catch {
      (err) => console.log(err);
    }
  }

  return (
    <S.PostUploadWrapper
      method="POST"
      // 서버로 전송은 form에서 버튼을 눌렀을때 발생하는 함수(onSubmit)안에서 이루어지면 됩니다
      onSubmit={(e) => {
        e.preventDefault();
        //post폼은 버튼 누를때 기본으로 새로고침되게 되어있는데, 새로고침 안하도록 막아주는 코드
        // 응답이 오면, 응답을 담아서 게시글 업로드 POST 요청보내는 함수 실행
        createPost(e);
      }}
    >
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
