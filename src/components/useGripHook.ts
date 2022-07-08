import {useState} from 'react';
import {Grip} from '../types';

const useGripHook = () => {
  const [gripChoice, setGrip] = useState<Grip | undefined>();

  return {gripChoice, setGrip};
};

export default useGripHook;
