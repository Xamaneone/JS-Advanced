function GetMonthDaysByMonthAndYear(month, year) {
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}

GetMonthDaysByMonthAndYear(1, 2012)
GetMonthDaysByMonthAndYear(2, 2021)

