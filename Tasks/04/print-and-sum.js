function solve(firstNum, lastNum) {
    let sum = 0;
    let log = '';
    for (let i = firstNum; i <= lastNum; i++ ) {
        log += i + ' ';
        sum += i
    } 
    console.log(log.trim());
    console.log(`Sum: ${sum}`)
}



solve(5, 10)	// 5 6 7 8 9 10 Sum: 45
solve(0, 26)	//0 1 2 … 2 Sum: 351