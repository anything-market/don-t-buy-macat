import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './adoptSection.style';
import Modal from '../modal/Modal/Modal';
import ProductModalContent from '../modal/modalContent/ProductModalContent/ProductModalContent';
export default function AdoptSection({ accountName }) {
  const [userToken, setUserToken] = useState('');
  const [adoptData, setAdoptData] = useState([]);

  //데이터 가져오기
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);

    const handleGetData = async () => {
      try {
        const res = await axios
          .get(`https://mandarin.api.weniv.co.kr/product/${accountName}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-type': 'application/json',
            },
          })
          .then((res) => {
            setAdoptData(res.data.product);
          });
      } catch (error) {
        console.error(error);
      }
    };
    handleGetData();
  }, []);

  //price 콤마 추가
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

  //모달열기
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {adoptData.length !== 0 ? (
        <S.AdoptSection>
          <S.AdoptSectionWrap>
            <S.SectionHeading>입양을 기다려요</S.SectionHeading>
            <S.AdoptList>
              {adoptData.map((item) => (
                <S.AdoptListItem key={item.id} onClick={handleOpenModal}>
                  <S.CatImage src={item.itemImage} />
                  <S.CatName>{item.itemName}</S.CatName>
                  <S.AdoptionFee>
                    책임비 | {priceFormat(item.price)}
                  </S.AdoptionFee>
                </S.AdoptListItem>
              ))}
            </S.AdoptList>
          </S.AdoptSectionWrap>
        </S.AdoptSection>
      ) : null}
      {isOpenModal && (
        <>
          <Modal handleCloseModal={handleCloseModal}>
            <ProductModalContent />
          </Modal>
        </>
      )}
    </>
  );
}
