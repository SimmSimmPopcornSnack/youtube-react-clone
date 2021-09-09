const UNITS = ["K", "M", "B", "T"];

// https://stackoverflow.com/a/28608086/232883
export function getShortNumberString(number) {
    const shouldShowDecimalPlace = UNITS.some((element, index) => {
        const lowerBound = Math.pow(1000, index + 1);
        const upperBound = lowerBound * 11;
        return lowerBound < number && number < upperBound;
    });
    const digits = shouldShowDecimalPlace ? 1: 0;
    for(let i = UNITS.length - 1; i >= 0; --i) {
        const decimal = Math.pow(1000, i + 1);

        if(number >= decimal) {
            return (number / decimal).toFixed(digits) + UNITS[i];
        }
    }
    return number.toString();
}
