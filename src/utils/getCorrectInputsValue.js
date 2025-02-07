export function getCorrectInputsValue(target, min, max) {
    const value = parseInt(target.value);

    return {
        fieldName: target.name || '',
        value: rangeValues(value, min, max),
    }
}

function rangeValues(value, min, max) {
    if (isNaN(value)) return '';
    if (value < min ) return min;
    if (value > max) return max;
    return value;
}