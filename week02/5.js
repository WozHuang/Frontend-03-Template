const target = 'abcdef';
function match(str = '') {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      const a = 1;
      if (str.charAt(i + j) !== target.charAt(j)) {
        break;
      }
      if (j === target.length - 1) {
        return i;
      }
    }
  }
}

const testCase = [
  'abcdefg',
  '0abcdef',
  '0abcdefg',
  'abczdeg',
  'aabcdeag',
]

testCase.forEach(str => {
  console.log(
    `match('${str}') => ${match(str)}`
  )
})
