function PreviousDate(year, month, day) {
    let date = new Date(year, month-1, day-1)
    if (date.getDate() != day - 1) {
        date = new Date(year, month-2, date.getDate())
        if (date.getMonth() != month-2) {
            date = new Date(year-1, month-2, date.getDate())
        }
    }
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}


PreviousDate(2016, 9, 30)
PreviousDate(2016, 10, 1)