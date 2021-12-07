import Input from 'components/atoms/Input';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';
import { useUserContext } from 'contexts/UserContext';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InformationScreenNavigationProp } from './types';
import { ScreenNames } from 'setup/navigation/enums';
import StyledView from 'components/styles/StyledView/styles';
import Typography from 'components/atoms/Typography';

const WelcomeScreen: React.FC = () => {
  const { setToken } = useUserContext();
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation<InformationScreenNavigationProp>();

  return (
    <ScreenContentWrapper>
      <StyledView pt={20}>
        <Input
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          placeholder='Your API key'
        />
        <Button
          title='Next'
          onPress={() => {
            setToken(inputValue);
            navigation.navigate(ScreenNames.Home);
          }}
        />
        <StyledView pt={40} px={20}>
          <Typography variant='h3'>
            *Note: Token isnt required and you can still continue without it,
            but API calls will be limited to 60/hour instead od 1000/hour.
          </Typography>
        </StyledView>
      </StyledView>
    </ScreenContentWrapper>
  );
};

export default WelcomeScreen;
