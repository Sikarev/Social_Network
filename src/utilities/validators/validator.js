export const requiredField = value => {
    if (value) return undefined;
    return "Text is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (maxLength < value.length) return `Max length is ${maxLength} characters`
    return undefined;
}