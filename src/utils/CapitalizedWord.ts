export const CapitalizedWord = (word: string) => {
    word = word.toLowerCase()
    return word[0].toUpperCase() + word.substring(1)
}
