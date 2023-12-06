/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length == 0){
        return undefined;
    }
    let ans = numbers[0];
    for(const val of numbers){
        ans = Math.max(ans, val);
    }
    return ans;

}

module.exports = findLargestElement;