/**
 check equal json string equal for memoizing comparison
 */
export const isEqualJson = (prev?: Object, next?: Object) => {
  try {
    return JSON.stringify(prev || '') === JSON.stringify(next);
  } catch (e) {
    return false;
  }
};
