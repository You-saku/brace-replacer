const argsLength = Deno.args.length;

if (argsLength !== 1) {
    console.error("Please enter 1 text.");
    Deno.exit(1);
}

const originalText: string = Deno.args[0];
console.log(`Original Text：${originalText}`);

const matchWords = originalText.match(/\${([^}]+)}/g); // ${hoge} を取得し配列に
const targets = [...new Set(matchWords)]; // 重複排除

const words: Array<string> = [];
targets.forEach(target => {
    console.log(`What do you convert ${target} to?`);
    const userInput = prompt("Please input : ") || ''; // 文字列の型パズルのため、空文字を入れておく
    words.push(userInput);
});

let result: string = originalText; // 元の文字をコピー
words.forEach((word, index) => {
    // RegExpインスタンスにしないと上手く動かなかった
    const pattern = targets[index];
    
    const regex = new RegExp('\\' + pattern, "g"); // ${hoge} の $をエスケープする

    result = result.replace(regex, word);
});

console.log('Finished! To use result, Please copy next line.\n');
console.log(result);
