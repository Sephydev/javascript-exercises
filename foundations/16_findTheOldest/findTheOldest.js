const findTheOldest = function(peoples) {

  const sortedPeoples = peoples.sort((a, b) => {
    const aDeath = a.yearOfDeath || new Date().getFullYear();
    const bDeath = b.yearOfDeath || new Date().getFullYear();

    const firstPersonAge = aDeath - a.yearOfBirth;
    const secondPersonAge = bDeath- b.yearOfBirth;
    
    return secondPersonAge - firstPersonAge;
  })

  return sortedPeoples[0];
};

// Do not edit below this line
module.exports = findTheOldest;
