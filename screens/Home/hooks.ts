import axios from 'axios';
import { useUserContext } from 'contexts/UserContext';
import { useState, useEffect } from 'react';
import ErrorToast from 'react-native-toast-message';
import { DataProps } from './types';

const useHomeScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataProps>([]);
  const [filteredData, setFilteredData] = useState<DataProps>([]);
  const [page, setPage] = useState(1);
  const { token } = useUserContext();

  const showToast = () => {
    ErrorToast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Failed to fetch data',
    });
  };

  const getData = async () => {
    try {
      const { data: fetchedData } = await axios(
        `https://api.github.com/repos/facebook/react-native/issues?per_page=20&page=${page}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setData([...data, ...fetchedData]);
      setPage((prevValue) => prevValue + 1);
    } catch (error) {
      console.error(error);
      showToast();
    }

    await setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(({ title }) =>
        title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      )
    );
  }, [inputValue]);

  return {
    data,
    getData,
    isLoading,
    inputValue,
    setInputValue,
    filteredData,
  };
};

export default useHomeScreen;
