/* eslint-disable indent */
/* eslint-disable no-unsafe-optional-chaining */
import Input from 'components/atoms/Input';
import Typography from 'components/atoms/Typography';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';
import StyledView from 'components/styles/StyledView/styles';
import { useUserContext } from 'contexts/UserContext';
import React, { useState } from 'react';
import { Button, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { setAsyncStorageItem } from 'setup/asyncStorage';
import { InformationScreenProps } from './types';

const InformationScreen: React.FC<InformationScreenProps> = ({ route }) => {
  const [inputValue, setInputValue] = useState('');
  const { comments, setComments } = useUserContext();
  const { bottom } = useSafeAreaInsets();
  const item = route?.params?.information?.item;
  const issueComments = comments?.find((element) => element?.id === item?.id);
  const issueCommentsIndex = comments?.findIndex(
    (element) => element?.id === item?.id
  );
  const saveToStorage = async (comment: any) => {
    await setAsyncStorageItem('comments', comment);
  };

  return (
    <ScreenContentWrapper>
      <ScrollView>
        <Typography variant='h3Bold'>Title:</Typography>
        <Typography>{item?.title}</Typography>
        <Typography variant='h3Bold'>State:</Typography>
        <Typography>{item?.state}</Typography>
        <Typography variant='h3Bold'>Body:</Typography>
        <Typography>{item?.body}</Typography>
        <Typography variant='h3Bold'>Comments:</Typography>
        <Typography>
          {issueComments
            ? issueComments.comments?.map((item: string) => (
                <Typography key={item}>{item}</Typography>
              ))
            : 'No comments'}
        </Typography>
        <Typography variant='h3Bold'>Comment:</Typography>
        <Input
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          placeholder='Your comment...'
        />
        <Button
          title='send'
          onPress={() => {
            if (
              comments &&
              typeof issueCommentsIndex === 'number' &&
              comments[issueCommentsIndex] &&
              issueCommentsIndex !== -1
            ) {
              comments[issueCommentsIndex] = {
                id: comments[issueCommentsIndex].id,
                comments: [
                  ...comments[issueCommentsIndex].comments,
                  inputValue,
                ],
              };
              setComments([...comments]);
              saveToStorage([...comments]);
            } else {
              if (comments && comments[0] !== null) {
                setComments([
                  ...comments,
                  {
                    id: item?.id,
                    comments: [inputValue],
                  },
                ]);
                saveToStorage([
                  ...comments,
                  {
                    id: item?.id,
                    comments: [inputValue],
                  },
                ]);
              } else {
                setComments([
                  {
                    id: item?.id,
                    comments: [inputValue],
                  },
                ]);
                saveToStorage([
                  {
                    id: item?.id,
                    comments: [inputValue],
                  },
                ]);
              }
            }
          }}
        />
        <StyledView pb={bottom} />
      </ScrollView>
    </ScreenContentWrapper>
  );
};

export default InformationScreen;
