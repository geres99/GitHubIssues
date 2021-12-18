import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import StyledView from 'components/styles/StyledView/styles';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';
import Typography from 'components/atoms/Typography';
import useHomeScreen from './hooks';
import { ScreenNames } from 'setup/navigation/enums';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from './types';
import Avatar from 'components/atoms/Avatar';
import AnimatedLoader from 'components/styles/AnimatedLoader';
import Input from 'components/atoms/Input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  const { data, getData, isLoading, inputValue, setInputValue, filteredData } =
    useHomeScreen();
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScreenContentWrapper areItemsCentered={isLoading}>
      {isLoading ? (
        <AnimatedLoader />
      ) : (
        <StyledView flex={1}>
          <StyledView py={2} flexDirection='row'>
            <StyledView flex={1}>
              <Input
                placeholder='Search...'
                value={inputValue}
                onChangeText={(value) => setInputValue(value)}
              />
            </StyledView>
          </StyledView>
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
                  <Avatar
                    size={50}
                    source={{
                      uri: item.item.user.avatar_url,
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
            ListEmptyComponent={
              <StyledView
                flex={1}
                flexDirection='row'
                justifyContent='center'
                pt={2}
              >
                <Typography variant='h1'>No data found.</Typography>
              </StyledView>
            }
            ListFooterComponent={() => <StyledView pb={bottom} />}
            data={inputValue ? filteredData : data}
          />
        </StyledView>
      )}
    </ScreenContentWrapper>
  );
};

export default HomeScreen;
