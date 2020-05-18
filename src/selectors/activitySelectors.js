export const getActivities = state => state;

export const getCoffees = state => getActivities(state.coffees);

export const getSnacks = state => getActivities(state.snacks);

export const getNaps = state => getActivities(state.naps);

export const getStudies = state => getActivities(state.studies);
