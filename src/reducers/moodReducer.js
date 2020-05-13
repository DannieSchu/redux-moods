import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP } from '../actions/moodActions';

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
    case EAT_SNACK:
      return { ...state, snacks: action.payload };
    case TAKE_NAP:
      return { ...state, naps: action.payload };
    default: {
      console.log(`unhandled type: ${action.type}`);
      return state;
    }
  }
}
