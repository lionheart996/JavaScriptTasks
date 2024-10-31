 function solve( groupOfPeople, typeOfGroup, dayOfTheWeek) {
    
    const sFriday = 8.45;
    const sSaturday = 9.80;
    const sSunday = 10.46;
    const bFriday = 10.90;
    const bSaturday = 15.60;
    const bSunday = 16;
    const rFriday = 15;
    const rSaturday = 20;
    const rSunday = 22.50;
    
    let price;
    switch(typeOfGroup) {
        case 'Students': 
        if (dayOfTheWeek === 'Friday') {
            price = groupOfPeople * sFriday;
        } else if (dayOfTheWeek === 'Saturday') {
            price = groupOfPeople * sSaturday;
        } else if (dayOfTheWeek === 'Sunday') {
            price = groupOfPeople * sSunday;
        } 
        if (groupOfPeople >= 30) {
            price *= 0.85;
        } break;

        case 'Business': 
        if (groupOfPeople >= 100) {
            groupOfPeople -= 10;
        }
        if (dayOfTheWeek === 'Friday') {
            price = groupOfPeople * bFriday;
        } else if (dayOfTheWeek === 'Saturday') {
            price = groupOfPeople * bSaturday;
        } else if (dayOfTheWeek === 'Sunday') {
            price = groupOfPeople * bSunday;
        }; break;

        case 'Regular': 

        if (dayOfTheWeek === 'Friday') {
            price = groupOfPeople * rFriday;
        } else if (dayOfTheWeek === 'Saturday') {
            price = groupOfPeople * rSaturday;
        } else if (dayOfTheWeek === 'Sunday') {
            price = groupOfPeople * rSunday;
        }
        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            price *= 0.95;
        } break;

    }
    console.log(`Total price: ${price.toFixed(2)}`)
 }
 

 solve(30, "Students", "Sunday") //	Total price: 266.73
 solve(40, "Regular", "Saturday") // Total price: 800.00