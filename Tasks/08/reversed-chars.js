function solve(symbolOne, symbolTwo, symbolThree) {
    let combinationOfSymbols = `${symbolOne}${symbolTwo}${symbolThree}`;
    combinationOfSymbolsReversed = ''
    for (let i=combinationOfSymbols.length - 1 ; i >= 0; i--)
        combinationOfSymbolsReversed += combinationOfSymbols[i] + ' ';
    console.log(combinationOfSymbolsReversed.trim())
}

solve('A','B','C') // C B A
solve('1','L','&') // & L 1