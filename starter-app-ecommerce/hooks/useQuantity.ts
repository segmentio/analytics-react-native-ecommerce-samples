import {useState} from 'react';

export const useQuantity = () => {
  const [count, setCount] = useState<number | undefined>();

  return {count, setCount};
};
