import React, { useRef, useEffect, useState } from 'react';
import defaultProfilePhoto from '../../assets/basic-profile-img-.svg';
import fileUploadButton from '../../assets/upload-file.svg';
import * as S from './setProfile.style';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SetProfile() {
  const location = useLocation();
  const fileInput = useRef();
  const navigate = useNavigate();

  const email = location.state.email;
  const password = location.state.password;
  // console.log(email, password);

  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userIntro, setUserIntro] = useState('');

  const [isUserName, setIsUserName] = useState(false);
  const [isUserID, setIsUserID] = useState(false);
  const passed = isUserName && isUserID;

  const [userNameWarningMessage, setUserNameWarningMessage] = useState('');
  const [userIDWarningMessage, setUserIDWarningMessage] = useState('');

  const [profileImage, setProfileImage] = useState('');
  const [preview, setPreview] = useState('');

  // file 인풋창 열어주는 함수
  const openInputFile = () => {
    fileInput.current.click();
  };

  // file input이 onchange되면 실행되는 함수
  const imageFileHandler = (e) => {
    // 이 함수의 역할
    // 1. 이미지를 잡아서 이미지 src에 쓸 수 있는 base64형태로 바꿔주기 -> 미리보기 띄우기
    // 2. 이미지를 서버에 전송해서 파일네임 획득 -> 획득한 파일네임 최종 폼 전송에 사용

    // 일단 이미지파일객체를 집어서 Blob변수에 넣어줍니다. Blob은 'base64로 인코딩할 놈' 으로 이해하면 될 듯
    const Blob = e.target.files[0];

    // Blob이 undefined면 바로 함수 종료. 밑에 무거운 일을 실행하지 않음
    if (Blob === undefined) return;

    // Blob의 type을 한번 콘솔로 찍어보면 image/확장자명 이렇게 나옵니다
    console.log(Blob.type);
    // 이미지 type이 'image'로 시작하지 않으면 알럿창 띄우고 함수 종료
    if (Blob.type.substr(0, 5) !== 'image') {
      alert('image만 업로드가 가능합니다');
      return;

      // 이미지 type이 'image'로 시작하면 그제서야 인코딩을 시작해볼까?????
    } else if (Blob.type.substr(0, 5) === 'image') {
      // fileReader 만들어서 reader에 넣어주고
      const reader = new FileReader();
      // reader야, 내 Blob base62인가 뭐시긴가로 바꿔줘!
      reader.readAsDataURL(Blob);

      // fileReader는 어쨌든 힘든일을 하기 때문에 비동기 처리를 해준다.
      return new Promise((resolve) => {
        // reader가 file 읽는걸 성공적으로 onload했을 때 아래 콜백함수 실행
        reader.onload = async () => {
          // 성공적으로 onload가 끝나면 reader.result 안에 그 결과가 담긴다.
          // 그 결과를 preview에 넣어줘 -> previw를 미리보기 img src에 사용!!
          setPreview(reader.result);

          // 아래는 서버에 선택한 이미지 전송해서 파일네임 받아오는 기능
          // 폼 안에있는 정보는 서버에 보낼 때 Formdata 안에 넣어서 보낸다.
          let formData = new FormData();
          // FormData 생성해주고 그 안에 append(name, value) 형태로 데이터 넣어줌
          formData.append('image', Blob);

          // 서버에 post요청시 두번째 인자값이 formData 넣어줌
          const res = await axios.post(
            'http://146.56.183.55:5050/image/uploadfiles',
            formData,
          );

          // 그리고 서버에서 받은 response를 확인해보세요
          console.log(res.data);
          // res.data[0].filename에 'filename'이 있음. 그걸 나중에 폼 서버 최종 전송시 보낼 image로 useState를 사용해서 전송해주면 됨
          setProfileImage(`http://146.56.183.55:5050/${res.data[0].filename}`);
          resolve();
        };
      });
    }
  };

  // userName 유효성 검사
  useEffect(() => {
    // console.log(userName.length);
    if (userName.length > 10 || (userName.length < 2 && userName !== '')) {
      setUserNameWarningMessage('2자~10자 이내여야 합니다.');
      setIsUserName(false);
    } else if (userName === '') {
      setIsUserName(false);
    } else {
      setUserNameWarningMessage();
      setIsUserName(true);
    }
  }, [userName]);

  // userID 유효성 검사
  useEffect(() => {
    const regExp = /^[a-z0-9A-Z_.,()]{1,}$/;
    if (!regExp.test(userID) && userID !== '') {
      setUserIDWarningMessage(
        '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
      );
      setIsUserID(false);
    } else if (userID === '') {
      setIsUserID(false);
    } else {
      setUserIDWarningMessage('');
      setIsUserID(true);
    }
  }, [userID]);

  const signInHandler = async function () {
    // console.log('되는거야?');
    try {
      const res = await axios.post('http://146.56.183.55:5050/user', {
        headers: {
          'Content-type': 'application/json',
        },
        user: {
          username: userName,
          email: email,
          password: password,
          accountname: userID,
          intro: userIntro,
          image: profileImage,
        },
      });
      console.log(res.data);
      navigate('/home');
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '이미 사용중인 계정 ID입니다.') {
        setUserIDWarningMessage('이미 사용중인 계정 ID입니다.');
      }
    }
  };

  return (
    <S.Wrapper>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <S.ImageBox>
        {/* 이미지 미리보기 -> preview사진 넣어준게 없으면 기본사진으로 지정 */}
        <img
          src={preview ? preview : defaultProfilePhoto}
          alt=""
          className="defaultProfilePhoto"
        />
        {/* 가짜버튼 */}
        <img
          src={fileUploadButton}
          alt=""
          className="fileUploadButton"
          onClick={openInputFile}
        />
        {/* 실제 file인풋버튼 -> 숨김처리 */}
        <input
          type="file"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={imageFileHandler}
        />
      </S.ImageBox>
      <form action="#">
        <S.FormBox>
          <label htmlFor="userName">사용자 이름</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="2~10자 이내여야 합니다."
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <p className="message">{userNameWarningMessage}</p>
          <label htmlFor="userID">계정 ID</label>
          <input
            type="text"
            id="userID"
            name="userID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
          <p className="message">{userIDWarningMessage}</p>
          <label htmlFor="userAbout">소개</label>
          <input
            type="text"
            id="userIntro"
            name="userIntro"
            placeholder="자신과 소중한 유기묘에 대해 소개해 주세요!"
            onChange={(e) => {
              setUserIntro(e.target.value);
            }}
          />
          <S.Button
            onClick={signInHandler}
            disabled={passed ? null : 'disabled'}
          >
            사지마캣 시작하기
          </S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SetProfile;
