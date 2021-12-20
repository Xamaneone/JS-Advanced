class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        let conditionCovered = false
        for (let supported of Object.keys(this.priceForTheCamp)) {
            if (supported == condition) {
                conditionCovered = true
            }
        }
        if (conditionCovered) {
            let person_exist = this.personExistCheck(name)
            if (person_exist) {
                return `The ${name} is already registered at the camp.`
            } else {
                if (money >= this.priceForTheCamp[condition]) {
                    let obj = {
                        name,
                        condition,
                        power: 100,
                        wins: 0
                    }
                    this.listOfParticipants.push(obj)
                    return `The ${name} was successfully registered.`
                } else {
                    return `The money is not enough to pay the stay at the camp.`
                }
            }
        } else {
            throw Error("Unsuccessful registration at the camp.");
        }
    }

    unregisterParticipant(name) {
        let person_exist = this.personExistCheck(name)
        if (person_exist) {
            let counter = 0
            for (let person of this.listOfParticipants) {
                if (person["name"] === name) {
                    this.listOfParticipants.splice(counter, 1)
                    return `The ${name} removed successfully.`
                }
                counter++
            }
        } else {
            throw Error(`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let person1 = undefined
        let person2 = undefined
        for (let obj of this.listOfParticipants) {
            if (participant1 === obj['name']) {
                person1 = obj
            } else {
                if (participant2 === obj['name']) {
                    person2 = obj
                }
            }
        }
        if (person1 === undefined && person2 !== participant2 && person2 === undefined) {
            throw Error(`Invalid entered name/s.`);
        } else {
            if (person1 && person2) {
                if (person1['condition'] !== person2['condition']) {
                    throw Error(`Choose players with equal condition.`)
                } else {
                    if (typeOfGame === "Battleship") {
                        person1['power'] += 20
                        return (`The ${person1['name']} successfully completed the game ${typeOfGame}.`)
                    } else if (typeOfGame === "WaterBalloonFights") {
                        if (person1['power'] > person2['power']) {
                            person1['wins'] += 1
                            return `The ${person1['name']} is winner in the game ${typeOfGame}.`
                        } else if (person2['power'] > person1['power']) {
                            person1['wins'] += 1
                            return `The ${person2['name']} is winner in the game ${typeOfGame}.`
                        } else {
                            return `There is no winner.`
                        }
                    }
                }
            } else {
                if (typeOfGame === "Battleship") {
                    person1['power'] += 20
                    return (`The ${person1['name']} successfully completed the game ${typeOfGame}.`)
                } else if (typeOfGame === "WaterBalloonFights") {
                    if (person1['power'] > person2['power']) {
                        person1['wins'] += 1
                        return `The ${person1['name']} is winner in the game ${typeOfGame}.`
                    } else if (person2['power'] > person1['power']) {
                        person1['wins'] += 1
                        return `The ${person2['name']} is winner in the game ${typeOfGame}.`
                    } else {
                        return `There is no winner.`
                    }
                }
            }
        }
    }

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        this.listOfParticipants.forEach((participant) => {
            result += `\n${participant['name']} - ${participant['condition']} - ${participant['power']} - ${participant['wins']}`
        })

        return result
    }


    personExistCheck(name) {
        let person_exist = false
        for (let person of this.listOfParticipants) {
            if (person["name"] === name) {
                person_exist = true
                break
            }
        }
        return person_exist
    }

}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
//
// console.log(summerCamp.toString());