import { drinkCoffee, DRINK_COFFEE } from './moodActions';

describe('moods actions', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drinkCoffee(2);

    expect(action).toEqual({
      type: DRINK_COFFEE,
      payload: 2
    });
  });
});
