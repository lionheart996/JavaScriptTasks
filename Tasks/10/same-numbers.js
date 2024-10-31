function checkDigits(number) {
    let numberToString = number.toString();
    let sum = 0;
    let allSame = true;

    // Calculate the sum and check if all digits are the same
    for (let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
        if (i > 0 && numberToString[i] !== numberToString[i - 1]) {
            allSame = false;
        }
    }

    // Print results
    console.log(allSame);
    console.log(sum);
}


solve(2222222) // true 14		
solve(1234) // false 10