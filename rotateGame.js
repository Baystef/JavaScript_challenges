function rotateArray(shifts, array) {
  if (shifts < 0) {
    console.log('Invalid number of shifts')
    return;
  }
  let temp = [...array];
  console.log('Initial temp', temp);

  for (let i = 0; i < shifts; i++) {
    let first = temp.shift();
    temp = [...temp, first];
    console.log('temp', temp);
  }
  return temp;
}

const pushIndex = (result, a) => {
  return result.push(a.indexOf(Math.max(...a)));
}

function getMaxElementIndexes(a, rotate) {
  const result = [];
  rotate.map(r => {
    if (r <= 0) {
      pushIndex(result, a);
    } else {
      a = rotateArray(r, a);
      pushIndex(result, a);
    }
  })
  return result;
}


let array = [1, 2, 3];

console.log(getMaxElementIndexes(array, [1, 2, 3, 4]))
