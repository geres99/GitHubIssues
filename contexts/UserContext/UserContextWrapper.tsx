import React, { useState, useEffect } from 'react';
import { getAsyncStorageItem } from 'setup/asyncStorage';
import { UserContextProvider } from './index';
import { CommentsProps } from './types';

const UserContextWrapper: React.FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [comments, setComments] = useState<CommentsProps[]>([]);

  useEffect(() => {
    const getComments = async () => {
      const comments = await getAsyncStorageItem('comments');
      setComments(JSON.parse(comments));
    };

    getComments();
  }, []);

  return (
    <UserContextProvider
      value={{
        token,
        setToken,
        comments,
        setComments,
      }}
    >
      {children}
    </UserContextProvider>
  );
};

export default UserContextWrapper;
