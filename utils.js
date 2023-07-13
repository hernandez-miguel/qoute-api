const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const findPerson = (arr, person) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].person === person) {
      return true;
    }
  }

  return false;
}

const filterByPerson = (arr, person) => {
  return arr.filter(ele => {
    return ele.person == person;
  })
}

module.exports = {
  getRandomElement,
  findPerson,
  filterByPerson
};
