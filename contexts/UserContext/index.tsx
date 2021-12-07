import { createContext, useContext } from 'react';
import noop from 'lodash/noop';
import { UserContextValues } from './types';

export const UserContext = createContext<UserContextValues>({
  token: '',
  setToken: noop,
  comments: [
    { id: 1072624611, comments: ['hello', 'world', '!'] },
    { id: 1072624261, comments: ['test', 'test2'] },
  ],
  setComments: noop,
});

export const UserContextProvider = UserContext.Provider;
export const useUserContext = (): UserContextValues => useContext(UserContext);
