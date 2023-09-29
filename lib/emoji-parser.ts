// @ts-expect-error
import emojilib from "emojilib";
// @ts-expect-error
import unicodeEmojiJson from "unicode-emoji-json";

const getEmojiObjectByCode = (emojiCode: string) => {
    // @ts-expect-error
    const emojis: Record<string, { char: string; keywords: string[] }> = unicodeEmojiJson;

    for (const emoji in unicodeEmojiJson) {
        emojis[emoji] = {
            char: emoji,
            // @ts-expect-error
            keywords: emojilib[emoji] || [],
            ...unicodeEmojiJson,
        };
    }

    emojiCode = emojiCode.replaceAll(':', "");

    if (emojis[emojiCode]?.char) {
        return emojis[emojiCode];
    }
    const emojiKey = Object.keys(emojis).find((emojiKey) => emojis[emojiKey]?.keywords.includes(emojiCode));

    if (emojiKey) {
        return emojis[emojiKey];
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
