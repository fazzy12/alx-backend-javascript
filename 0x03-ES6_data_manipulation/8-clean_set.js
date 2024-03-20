export default function cleanSet (set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const valuesStartingWith = [...set].filter(value => value.startsWith(startString));
  const cleanedValues = valuesStartingWith.map(value => value.slice(startString.length)).join('-');
  return cleanedValues;
}
