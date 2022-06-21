// @ts-ignore
import emojilib from "emojilib";
// @ts-ignore
import unicodeEmojiJson from "unicode-emoji-json";

const getEmojiObjectByCode = (emojiCode: string) => {
    // @ts-ignore
    let emojis: { [key: string]: { keywords: string[]; char: string } } = unicodeEmojiJson;

    for (const emoji in unicodeEmojiJson) {
        emojis[emoji] = {
            // @ts-ignore
            keywords: emojilib[emoji] || [],
            char: emoji,
            ...unicodeEmojiJson,
        };
    }

    emojiCode = emojiCode.replace(/:/g, "");

    if (emojis[emojiCode]?.char) {
        return emojis[emojiCode];
    } else {
        const emojiKey = Object.keys(emojis).find((emojiKey) => emojis[emojiKey]?.keywords?.includes(emojiCode));

        if (!!emojiKey) {
            return emojis[emojiKey];
        }
    }

    return undefined;
};

export default function parse(text: string) {
    const emojisRegExp = /:(\w+):/g;
    const emojisList = text.match(emojisRegExp);

    if (emojisList) {
        emojisList.forEach((emojiCode) => {
            const emoji = getEmojiObjectByCode(emojiCode);

            if (emoji) {
                const regEx = new RegExp(emojiCode);
                text = text.replace(regEx, emoji.char);
            }
        });
    }

    return text;
}
