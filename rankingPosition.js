const peeps = [
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]

function ranking(people) {
  return people.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (a.points === b.points) {
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 1
    }

    return b.points - a.points
  }).map((el, i, array) => {
      let previousPos =  array[i - 1]
      let currentPos = array[i]
      
      if ((i > 0) && currentPos.points === previousPos.points) {
        currentPos['position'] = previousPos.position
        return currentPos;
      }
      el['position'] = i + 1
      return el;
    })
}

console.log(ranking(peeps))