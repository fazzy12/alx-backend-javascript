export default function cleanSet(set, startString) {
  let result = '';
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += value.slice(startString.length) + '-';
    }
  }
  // Remove the trailing '-' if any
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }
  return result;
}
