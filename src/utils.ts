/* from https://dev.to/jorik/country-code-to-flag-emoji-a21 */
function getFlagEmoji(countryCode: string) {
    return countryCode.toUpperCase()
        .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0))
        );
}

export { getFlagEmoji };