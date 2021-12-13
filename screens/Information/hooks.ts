import { RouteProp } from '@react-navigation/core';
import { useUserContext } from 'contexts/UserContext';
import { useState } from 'react';
import { InformationScreenParamsProps } from './types';
import { postComment } from './utils';

const useInformationHook = (
  route: RouteProp<{ params: InformationScreenParamsProps }>
) => {
  const [inputValue, setInputValue] = useState('');
  const { comments, setComments } = useUserContext();
  const item = route?.params?.information?.item;
  const issueComments = comments?.find((element) => element?.id === item?.id);
  const issueCommentsIndex = comments?.findIndex(
    (element) => element?.id === item?.id
  );

  const saveComment = () => {
    if (
      comments &&
      typeof issueCommentsIndex === 'number' &&
      comments[issueCommentsIndex] &&
      issueCommentsIndex !== -1
    ) {
      const clonedComments = [...comments];
      clonedComments[issueCommentsIndex].comments?.push(
        `Anonymous: ${inputValue}`
      );

      postComment(setComments, [...clonedComments]);
    } else {
      if (comments && comments[0] !== null) {
        postComment(setComments, [
          ...comments,
          {
            id: item?.id,
            comments: [`Anonymous: ${inputValue}`],
          },
        ]);
      } else {
        postComment(setComments, [
          {
            id: item?.id,
            comments: [`Anonymous: ${inputValue}`],
          },
        ]);
      }
    }
  };

  return { item, issueComments, inputValue, setInputValue, saveComment };
};

export default useInformationHook;
