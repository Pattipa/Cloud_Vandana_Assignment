const inputSentence = "This is a sunny day";
reverseWordsInSentence(inputSentence);
function bubbleSortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const inputArray = [4, 2, 7, 1, 9, 3];
const sortedArray = bubbleSortDescending(inputArray);
console.log(sortedArray); 

 
