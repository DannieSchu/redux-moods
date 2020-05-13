import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import reducer from './moodReducer';

describe('mood reducer', () => {
  it('handles the DRINK_COFFEE action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    
    const action = drinkCoffee(1);

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
 
  it('handles the EAT_SNACKS action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = eatSnack(1);

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  });

  it('handles the TAKE_NAP action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = takeNap(1);

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 1,
      studies: 0
    });
  });
 
  it('handles the STUDY action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = study(1);

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 1
    });
  });
});
