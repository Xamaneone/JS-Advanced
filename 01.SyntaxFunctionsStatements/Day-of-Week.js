function DayFromNumber(strDay) {
    let result;
    switch (strDay) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default: result = 'error';
    }   

    return result;
}

console.log(DayFromNumber('Monday'))
console.log(DayFromNumber('Tuesday'))
console.log(DayFromNumber('Wednesday'))
console.log(DayFromNumber('Thursday'))
console.log(DayFromNumber('Friday'))
console.log(DayFromNumber('Saturday'))
console.log(DayFromNumber('Sunday'))
console.log(DayFromNumber('8'))
console.log(DayFromNumber('undefined'))