import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/moodActions';

const initialState = {    
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: action.payload + 1 };
    case EAT_SNACK:
      return { ...state, snacks: action.payload + 1 };
    case TAKE_NAP:
      return { ...state, naps: action.payload + 1 };
    case STUDY:
      return { ...state, studies: action.payload + 1 };
    default: {
      console.log(`unhandled type: ${action.type}`);
      return state;
    }
  }
}
