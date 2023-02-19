
export const trimExtraSpaces = (str: string) => {
    return str.replace(/(?<=\s)\s*/g, '')
}