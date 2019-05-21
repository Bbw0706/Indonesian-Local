import { createContext } from 'react';

const initialState = {
  search: '',
  changeSearch: (e: any): void => {},
}

const searchContext = createContext(initialState);

export default searchContext;