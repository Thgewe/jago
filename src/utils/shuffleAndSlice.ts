export const shuffleAndSlice = (arr: any[], length: number = arr.length) => {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, length)
}