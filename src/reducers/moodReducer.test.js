import { drinkCoffee, eatSnack, takeNap, study, reset } from '../actions/moodActions';
import reducer from './moodReducer';

describe('mood reducer', () => {
  it('handles the DRINK_COFFEE action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    
    const action = drinkCoffee();

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
    const action = eatSnack();

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
    const action = takeNap();

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
 
  it('handles the RESET action', () => {
    const state = {
      coffees: 6,
      snacks: 2,
      naps: 1,
      studies: 1
    };
    const action = reset();

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
});
