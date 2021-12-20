function is_driver_correct(speed, area) {
    let area_speed = 0
    switch (area) {
        case 'motorway':
            area_speed = 130;
            break;
        case 'interstate':
            area_speed = 90;
            break;
        case 'city':
            area_speed = 50;
            break;
        case 'residential':
            area_speed = 20;
            break;
    }

    if (speed <= area_speed) {
        console.log(`Driving ${speed} km/h in a ${area_speed} zone`);
    }
    else {
        let status = 'speeding'
        if (speed - area_speed > 20) {
            status = 'excessive speeding'
        }
        if (speed - area_speed > 40) {
            status = 'reckless driving'
        }
        console.log(`The speed is ${speed-area_speed} km/h faster than the allowed speed of ${area_speed} - ${status}`)
    }
}

is_driver_correct(40, 'city')
is_driver_correct(21, 'residential')
is_driver_correct(120, 'interstate')
is_driver_correct(200, 'motorway')