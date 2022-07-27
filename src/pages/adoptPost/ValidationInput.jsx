import React, { useState } from 'react';
import * as S from './adoptPost.style';
export default function ValidationInput({
  id, //label과 Input연결해주는 id
  label, //input의 제목
  type, //text,url
  value, //input의 value
  maxValue, //value의 최대 길이
  setValue, //value가 바뀌면 state에 값을 저장해줌
  regexCheck, //validation 정규표현식
  successText, //성공시 나타나는 문구 ""
  errorText, //error시 나타나는 문구
  defaultText, //빈값일 때 나타나는 문구
  placeholderText,
  isValid,
  setValid,
}) {
  //true면 error기능 작동
  const [isError, setIsError] = useState(false);
  //helperText 저장,변경
  const [helperText, setHelperText] = useState(defaultText);

  //가격 콤마 처리 로직
  const priceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(str));
  };

  const handleOnChange = (e) => {
    if (maxValue && maxValue < e.target.value.length) return;

    //가격은 따로 처리
    if (label === '책임비') {
      setValue(priceFormat(e.target.value));
    } else {
      setValue(e.target.value);
    }

    if (e.target.value === '') {
      setIsError(true);
      //valid값 설정
      id === 'itemName'
        ? setValid({ ...isValid, itemName: false })
        : id === 'price'
        ? setValid({ ...isValid, price: false })
        : setValid({ ...isValid, link: false });
      //입력해주세요.
      return setHelperText(defaultText);
    }

    //정규표현식 체크해야한다면
    if (regexCheck) {
      //정규표현식 체크 통과되었을 때
      if (regexCheck.test(e.target.value)) {
        setIsError(false);
        //valid값 설정
        id === 'itemName'
          ? setValid({ ...isValid, itemName: true })
          : id === 'price'
          ? setValid({ ...isValid, price: true })
          : setValid({ ...isValid, link: true });
        //""
        return setHelperText(successText);
      }
      //정규표현식 체크 통과하지 못했을 때
      if (!regexCheck.test(e.target.value)) {
        setIsError(true);
        //valid값 설정
        id === 'itemName'
          ? setValid({ ...isValid, itemName: false })
          : id === 'price'
          ? setValid({ ...isValid, price: false })
          : setValid({ ...isValid, link: false });
        //해당 값에 맞는 에러 텍스트
        setHelperText(errorText);
      }
    }
  };

  return (
    <>
      <S.TxtLabel htmlFor={id}>{label}</S.TxtLabel>
      <S.TxtInput
        id={id}
        type={type}
        placeholder={placeholderText}
        value={value}
        onChange={handleOnChange}
        error={isError}
      />
      <S.InputErrorMessage>
        {isError && <em>{helperText}</em>}
      </S.InputErrorMessage>
    </>
  );
}
