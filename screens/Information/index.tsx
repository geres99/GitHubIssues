import HeaderWithDescription from 'components/atoms/HeaderWithDescription';
import Input from 'components/atoms/Input';
import Typography from 'components/atoms/Typography';
import StyledView from 'components/styles/StyledView/styles';
import React from 'react';
import { Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useInformationHook from './hooks';
import { InformationScreenProps } from './types';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';

const InformationScreen: React.FC<InformationScreenProps> = ({ route }) => {
  const { item, issueComments, inputValue, setInputValue, saveComment } =
    useInformationHook(route);

  return (
    <ScreenContentWrapper withoutTopInsets>
      <KeyboardAwareScrollView
        bounces={false}
        enableOnAndroid
        enableResetScrollToCoords={false}
        extraHeight={200}
        automaticallyAdjustContentInsets={false}
      >
        <StyledView p={2}>
          <HeaderWithDescription header='Title:' description={item.title} />
          <HeaderWithDescription header='State:' description={item.state} />
          <HeaderWithDescription header='Body:' description={item.body} />
          <HeaderWithDescription
            header='Comments:'
            description={
              issueComments ? (
                <StyledView>
                  {issueComments.comments?.map((item: string) => (
                    <Typography key={item}>{item}</Typography>
                  ))}
                </StyledView>
              ) : (
                'No comments'
              )
            }
          />
          <Typography variant='h3Bold'>Comment:</Typography>
          <Input
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
            placeholder='Your comment...'
          />
          <Button title='send' onPress={saveComment} />
        </StyledView>
      </KeyboardAwareScrollView>
    </ScreenContentWrapper>
  );
};

export default InformationScreen;
