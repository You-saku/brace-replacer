const argsLength = Deno.args.length;

if (argsLength !== 1) {
    console.error("Please enter 1 text.");
    Deno.exit(1);
}

const originalText: string = Deno.args[0];
console.log(`変換前：${originalText}`);

const matchWords = originalText.match(/\{([^}]+)\}/g); // {hoge} を取得し配列に
const targets = [...new Set(matchWords)]; // 重複排除

const words: Array<string> = [];
targets.forEach(target => {
    console.log(`${target}に入れる文字列を入力してください。`);
    const userInput = prompt("入力してください: ") || ''; // 文字列の型パズルのため、空文字を入れておく
    words.push(userInput);
});

let result: string = originalText; // 元の文字をコピー
words.forEach((word, index) => {
    // RegExpインスタンスにしないと上手く動かなかった
    const pattern = targets[index];
    const flags = "g";
    const regex = new RegExp(pattern, flags);

    result = result.replace(regex, word);
});

console.log(`変換後：${result}`);
