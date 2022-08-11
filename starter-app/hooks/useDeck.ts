import {useState} from 'react';

export const useDeck = () => {
  const [deckChoice, setDeck] = useState<number | undefined>();

  return {deckChoice, setDeck};
};
