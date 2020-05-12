import { DRINK_COFFEE, EAT_SNACK } from '../actions/moodActions';

const initialState = {    
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: action.payload };
    default: {
      console.log(`unhandled type: ${action.type}`);
      return state;
    }
  }
}
