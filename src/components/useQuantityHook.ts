import {useState} from 'react';

const useQuantityHook = () => {
  const [count, setCount] = useState(0);

  return {count, setCount};
};

export default useQuantityHook;
