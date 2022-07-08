import {useState} from 'react';

const useQuantityHook = () => {
  const [count, setCount] = useState<number | undefined>();

  return {count, setCount};
};

export default useQuantityHook;
