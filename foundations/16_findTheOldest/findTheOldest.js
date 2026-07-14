const findTheOldest = function(people) {
  const oldestPerson = people.reduce((oldest, current) => {
    const currentYearOfDeath = current.yearOfDeath ? current.yearOfDeath : (new Date()).getFullYear();
    const oldestYearOfDeath = oldest.yearOfDeath ? oldest.yearOfDeath : (new Date()).getFullYear();

    const currentAge = currentYearOfDeath - current.yearOfBirth;
    const oldestAge = oldestYearOfDeath - oldest.yearOfBirth;

    return currentAge > oldestAge ? current : oldest;
  })

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
