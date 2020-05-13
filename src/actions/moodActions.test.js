import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK, takeNap, TAKE_NAP, study, STUDY, RESET, reset } from './moodActions';

describe('moods actions', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates an EAT_SNACK action', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('creates a TAKE_NAP action', () => {
    const action = takeNap();

    expect(action).toEqual({
      type: TAKE_NAP
    });
  });

  it('creates a STUDY action', () => {
    const action = study();

    expect(action).toEqual({
      type: STUDY
    });
  });

  it('creates a RESET action', () => {
    const action = reset();

    expect(action).toEqual({
      type: RESET
    });
  });
});
