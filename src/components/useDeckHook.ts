import {useState} from 'react';

const useDeckHook = () => {
  const [deckChoice, setDeck] = useState(0);

  return {deckChoice, setDeck};
};

export default useDeckHook;
