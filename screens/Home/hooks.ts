import { useUserContext } from 'contexts/UserContext';
import { useState, useEffect } from 'react';

const useHomeScreen = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const { token } = useUserContext();

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
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, getData };
};

export default useHomeScreen;
