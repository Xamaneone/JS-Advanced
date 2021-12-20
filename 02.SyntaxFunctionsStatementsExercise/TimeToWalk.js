function calcWalkTimeToUni(steps, meters, km) {
    const distance = steps * meters
    const decimalTime = distance / 1000 / km
    let date = new Date(0, 0)
    date.setSeconds(Math.ceil(decimalTime * 60 * 60))
    date.setMinutes(date.getMinutes() + Math.floor(distance / 500))

    console.log(date.toTimeString().slice(0, 8))
}

calcWalkTimeToUni(4000, 0.60, 5)
calcWalkTimeToUni(2564, 0.70, 5.5)