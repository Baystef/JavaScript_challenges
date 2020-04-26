var h = 'hackerearth';

h = h.split('').slice(3, -3)
var sample = [[0,1], [2,3]];

function leap(starting, ending) {
  var range = [];
  for (var i = starting; i <= ending; i++){
    range.push(i);
  }
  var replaceArray = [];

  range.forEach((year) => {
    if (checkYear(year))
    replaceArray.push(year);
  })

  return replaceArray;
}

function checkYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year;
  } else {
    return false;
  }
}

function filterArr(array) {
  array = array.map(isjunkData);
  return array;
}

function isjunkData(value) {
  if (value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}
console.log(filterArr(['a','b', null, false, 0, ""])) ;