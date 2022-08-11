import {useState} from 'react';
import {Grip} from '../types';

export const useGrip = () => {
  const [gripChoice, setGrip] = useState<Grip | undefined>();

  return {gripChoice, setGrip};
};
