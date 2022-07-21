import UploadHeader from '../../components/header/UploadHeader/UploadHeader';
import PostUpload from '../../components/postUpload/PostUpload';
import { UploadProvider } from '../../context/UploadProvider';
import React from 'react';

const Upload = () => {
  return (
    <UploadProvider>
      <UploadHeader />
      <PostUpload />
    </UploadProvider>
  );
};

export default Upload;
