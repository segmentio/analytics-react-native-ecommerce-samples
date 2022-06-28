import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Option = {
  name: any;
  option: any;
};

const optionsSlice = createSlice({
  name: 'product',
  initialState: {
    size: 0,
    grip: '',
    quantity: 0,
  },
  reducers: {
    setOption(state, action: PayloadAction<Option>) {
      return {
        ...state,
        [action.payload.name]: action.payload.option,
      };
    },
  },
});

export const {setOption} = optionsSlice.actions;
export default optionsSlice.reducer;
