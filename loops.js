const vowelsAndConsonants = (s) => {
  const regex = /[aeiou]/
  const vowels = [];
  const consonants = [];
  [...s].map(el => {
    regex.test(el) ? vowels.push(el) : consonants.push(el);
  })
  return [...vowels, ...consonants].forEach(e => console.log(e));
}

const alphas = 'javascriptloops';
vowelsAndConsonants(alphas)


