function sumEvenNumbers(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sum += sums[i];
        }
    }
    return sum;
}


const sums = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(nums)); // Output: 12
