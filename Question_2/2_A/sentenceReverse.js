function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    let reversedSentence = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let reversedWord = '';

        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        if (i === words.length - 1) {
            reversedSentence += reversedWord;
        } else {
            reversedSentence += reversedWord + ' ';
        }
    }

    alert(reversedSentence);
}




