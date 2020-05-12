import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK } from './moodActions';

describe('moods actions', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drinkCoffee(2);

    expect(action).toEqual({
      type: DRINK_COFFEE,
      payload: 2
    });
  });

  it('creates an EAT_SNACK action', () => {
    const action = eatSnack(2);

    expect(action).toEqual({
      type: EAT_SNACK,
      payload: 2
    });
  });
});
