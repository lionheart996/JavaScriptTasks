function solve(num) {
    const fromNumberToString = num.toString();

    let sum = 0;
    for (let i = 0; i < fromNumberToString.length; i++)
        sum += Number(fromNumberToString[i]);
        console.log(sum)
}


solve(245678) // 32
solve(97561) //	28
solve(543) 	// 12