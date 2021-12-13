import { Dispatch, SetStateAction } from 'react';

export interface CommentsProps {
  id: number;
  comments?: string[];
}

export interface UserContextValues {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  comments?: CommentsProps[];
  setComments: Dispatch<SetStateAction<CommentsProps[]>>;
}
