const TRUTHY = [true, 1, {}];
const FALSY = [false, 0, undefined, null];
const NUMERIC = [-1, 0, 0.5, 1, 1000000, 1000000000];
function getEveryCombination([head, ...tail]) {
  if (!tail.length) return head.map(h => [h]);
  const combinations = getEveryCombination(tail);
  return combinations.map(combination => head.map(h => [h, ...combination])).flat();
}
function useMultiPossibility(test, possibilities) {
  getEveryCombination(possibilities).forEach(test);
}

export default useMultiPossibility;
export { FALSY, NUMERIC, TRUTHY, getEveryCombination };
