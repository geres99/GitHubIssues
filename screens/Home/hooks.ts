import { useUserContext } from 'contexts/UserContext';
import { useState, useEffect } from 'react';
import ErrorToast from 'react-native-toast-message';
import { DataProps } from './types';

const useHomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataProps>([]);
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
      const response = await fetch(
        `https://api.github.com/repos/facebook/react-native/issues?per_page=20&page=${page}`,
        {
          headers: new Headers({
            Authorization: token,
          }),
        }
      );
      const fetchedData = await response.json();
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

  return { data, getData, isLoading };
};

export default useHomeScreen;
