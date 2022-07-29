import React, { useRef, useEffect, useState } from 'react';
import defaultProfilePhoto from '../../assets/basic-profile-img-.svg';
import fileUploadButton from '../../assets/upload-file.svg';
import * as S from './EditUserProfile.style';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditUserProfile() {
  const fileInput = useRef();
  const navigate = useNavigate();
  const accountname = useParams().id;

  const [userToken, setUserToken] = useState('');
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userIntro, setUserIntro] = useState('');

  const [isUserName, setIsUserName] = useState(false);
  const [isUserID, setIsUserID] = useState(false);
  const passed = isUserName && isUserID;

  const [userNameWarningMessage, setUserNameWarningMessage] = useState('');
  const [userIDWarningMessage, setUserIDWarningMessage] = useState('');

  const [profileImage, EditUserProfileImage] = useState('');
  const [preview, setPreview] = useState('');

  //기존 유저 프로필 데이터 받아오기
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);

    if (userToken) {
      const getUserProfile = async function () {
        try {
          const res = await axios.get(
            `https://mandarin.api.weniv.co.kr/profile/${accountname}`,
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
                'Content-type': 'application/json',
              },
            },
          );
          setPreview(res.data.profile.image);
          setUserName(res.data.profile.username);
          setUserID(res.data.profile.accountname);
          setUserIntro(res.data.profile.intro);
        } catch (error) {
          console.log(error);
        }
      };
      getUserProfile();
    }
  }, []);

  // file 인풋창 열어주는 함수
  const openInputFile = () => {
    fileInput.current.click();
  };

  // file input값 onchange시 실행
  const imageFileHandler = (e) => {
    const Blob = e.target.files[0];

    if (Blob === undefined) return;

    const reader = new FileReader();
    reader.readAsDataURL(Blob);

    return new Promise((resolve) => {
      reader.onload = async () => {
        setPreview(reader.result);
        let formData = new FormData();
        formData.append('image', Blob);

        const res = await axios.post(
          'https://mandarin.api.weniv.co.kr/image/uploadfiles',
          formData,
        );

        EditUserProfileImage(
          `https://mandarin.api.weniv.co.kr/${res.data[0].filename}`,
        );
        resolve();
      };
    });
  };

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

  const getUserIdValidation = async function (userId) {
    try {
      const res = await axios({
        url: `https://mandarin.api.weniv.co.kr/user/accountnamevalid`,
        method: 'post',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        data: {
          user: {
            accountname: userId,
          },
        },
      });
      setUserIDWarningMessage(res.data.message);
    } catch {
      (err) => console.log(err);
    }
  };

  const onProfileEditSubmit = async function () {
    try {
      await axios({
        url: `https://mandarin.api.weniv.co.kr/user`,
        method: 'put',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        data: {
          user: {
            username: userName,
            accountname: userID,
            intro: userIntro,
            image: profileImage ? profileImage : preview,
          },
        },
      });
      navigate(`/profile/${accountname}`);
    } catch {
      (err) => console.log(err);
    }
  };

  return (
    <S.Wrapper>
      <h1>프로필 수정</h1>
      <S.ImageBox>
        <img
          src={preview ? preview : defaultProfilePhoto}
          style={{ objectFit: 'cover' }}
          alt="프로필 사진 미리보기"
          className="defaultProfilePhoto"
        />
        <img
          src={fileUploadButton}
          alt="버튼을 누르면 프로필사진을 선택하고 등록합니다"
          className="fileUploadButton"
          onClick={openInputFile}
        />
        <input
          type="file"
          accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
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
            value={userName}
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
            value={userID}
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            onChange={(e) => {
              setUserID(e.target.value);
              getUserIdValidation(e.target.value);
            }}
          />
          <p className="message">{userIDWarningMessage}</p>
          <label htmlFor="userAbout">소개</label>
          <input
            type="text"
            id="userIntro"
            name="userIntro"
            value={userIntro}
            placeholder="자신과 소중한 유기묘에 대해 소개해 주세요!"
            onChange={(e) => {
              setUserIntro(e.target.value);
            }}
          />
          <S.Button
            onClick={onProfileEditSubmit}
            disabled={passed ? null : 'disabled'}
          >
            수정하기
          </S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default EditUserProfile;
