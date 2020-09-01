//1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// My Solution
function noBoringZeros(n) {
  // your code
  if (n === 0) return 0;
  const spreadNum = n.toString().split("")
  while (spreadNum[spreadNum.length - 1] === '0') {
    spreadNum.pop()
  }
  return Number(spreadNum.join(''))
}

// Clever Alternatives
function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}
//////////////////////////////
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}