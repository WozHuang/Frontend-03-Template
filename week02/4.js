function findAB(str = '') {
  const len = str.length;
  for (let i = 0; i < len - 1; i++) {
    if (str.charAt(i) === 'a'
      && str.charAt(i + 1) === 'b'
    ) return i
  }
}

console.log("findAB('aab')", findAB('aab'));
console.log("findAB('abc')", findAB('abc'));
console.log("findAB('cab')", findAB('cab'));
console.log("findAB('acb')", findAB('acb'));