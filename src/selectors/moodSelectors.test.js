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
});
