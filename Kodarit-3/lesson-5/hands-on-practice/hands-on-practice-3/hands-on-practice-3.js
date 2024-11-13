function sumOfArryas(numbers){
    let sum 
    for (let i = 0; i< numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfArryas(arrayNumbers));

