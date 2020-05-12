export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = coffees => ({
  type: DRINK_COFFEE,
  payload: coffees
});

export const EAT_SNACK = 'EAT_SNACK';
export const eatSnack = snacks => ({
  type: EAT_SNACK,
  payload: snacks
});

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = naps => ({
  type: TAKE_NAP,
  payload: naps
});

