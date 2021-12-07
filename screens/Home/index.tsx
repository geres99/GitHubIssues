import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import StyledView from 'components/styles/StyledView/styles';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';
import Typography from 'components/atoms/Typography';
import useHomeScreen from './hooks';
import { ScreenNames } from 'setup/navigation/enums';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from './types';

const HomeScreen: React.FC = () => {
  const { data, getData } = useHomeScreen();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScreenContentWrapper>
      <StyledView flexGrow={1}>
        <FlatList
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenNames.Information, {
                  information: item,
                })
              }
            >
              <StyledView flexDirection='row' pl={10} pr={60}>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={{
                    uri:
                      item?.item?.user?.avatar_url ||
                      'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
                <StyledView pl={2} justifyContent='space-around'>
                  <Typography variant='h4Bold'>
                    {item.item.user.login}
                  </Typography>
                  <Typography>{item.item.title}</Typography>
                </StyledView>
              </StyledView>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.number}
          ItemSeparatorComponent={() => <StyledView pb={3} />}
          onEndReachedThreshold={0.5}
          onEndReached={getData}
          {...{ data }}
        />
      </StyledView>
    </ScreenContentWrapper>
  );
};

export default HomeScreen;
