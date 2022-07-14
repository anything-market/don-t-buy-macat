import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ChatModalContent() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <>
      <li>
        <button onClick={handleGoPrev}>채팅방 나가기</button>
      </li>
    </>
  );
}
