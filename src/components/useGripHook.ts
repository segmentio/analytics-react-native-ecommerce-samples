import {useState} from 'react';

const useGripHook = () => {
  const [gripChoice, setGrip] = useState('');

  return {gripChoice, setGrip};
};

export default useGripHook;
