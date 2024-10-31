function solve (fruit, weightInGrams, pricePerKilogram) {

    let weightInKilograms = weightInGrams / 1000
    let moneyNeeded = weightInKilograms * pricePerKilogram

    console.log(`I need ${'$' + moneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`)
}

solve( 'orange', 2500, 1.80 ) // I need $4.50 to buy 2.50 kilograms orange.

solve( 'apple', 1563, 2.35 ) //	I need $3.67 to buy 1.56 kilograms apple.