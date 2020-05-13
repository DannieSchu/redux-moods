import { getFace } from './moodSelectors';

describe('mood selectors', () => {
  it('returns tired face if no coffee or naps', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };

    const mood = getFace(state);

    expect(mood).toEqual('🤬');
  });

  it('returns hyper face if over-caffeinated', () => {
    const state = {
      coffees: 4,
      snacks: 1,
      naps: 0,
      studies: 0
    };

    const mood = getFace(state);

    expect(mood).toEqual('🙀');
  });

  it('returns vomit face if hungry and hyper', () => {
    const state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 0
    };

    const mood = getFace(state);

    expect(mood).toEqual('🤮');
  });
 
  it('returns brain explosion if studied', () => {
    const state = {
      coffees: 2,
      snacks: 0,
      naps: 0,
      studies: 3
    };

    const mood = getFace(state);

    expect(mood).toEqual('🤯');
  });
});
