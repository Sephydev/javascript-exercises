const findTheOldest = function (people) {
    const copyPeople = people.slice();

    let oldestAge = 0;
    let oldestPeople = {};
    copyPeople.forEach((p) => {
        if (!("yearOfDeath" in p)) {
            p["yearOfDeath"] = new Date().getFullYear();
        }

        console.log(copyPeople);

        if (p.yearOfDeath - p.yearOfBirth > oldestAge) {
            oldestAge = p.yearOfDeath - p.yearOfBirth;
            oldestPeople = p;
        }
    });
    return oldestPeople;
};

findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
])

// Do not edit below this line
module.exports = findTheOldest;
