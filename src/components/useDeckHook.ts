import {useState} from 'react';

const useDeckHook = () => {
  const [deckChoice, setDeck] = useState<number | undefined>();

  return {deckChoice, setDeck};
};

export default useDeckHook;
