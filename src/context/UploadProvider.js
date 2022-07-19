//true, false useContext만들기

import React, { createContext, useState } from 'react';

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
  const uploadState = useState(false);
  return (
    <UploadContext.Provider value={uploadState}>
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContext;
