import { AnyAction } from 'redux';

const localState = {
  sample: null
};

const sampleReducer = (state = localState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sampleReducer;
