import { CommentsProps } from 'contexts/UserContext/types';
import { Dispatch, SetStateAction } from 'react';
import { setAsyncStorageItem } from 'setup/asyncStorage';

export const saveToStorage = async (comment: CommentsProps[]) => {
  await setAsyncStorageItem('comments', comment);
};

export const postComment = (
  setComments: Dispatch<SetStateAction<CommentsProps[]>>,
  data: CommentsProps[]
) => {
  setComments(data);
  saveToStorage(data);
};
