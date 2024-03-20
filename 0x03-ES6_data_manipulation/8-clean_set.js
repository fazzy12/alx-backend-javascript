export default function cleanSet(set, startString) {
    const valuesStartingWith = [...set].filter(value => value.startsWith(startString));
    const cleanedValues = valuesStartingWith.map(value => value.slice(startString.length)).join('-');
    return cleanedValues;
}
