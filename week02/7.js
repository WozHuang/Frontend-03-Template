const target = 'abcabx';
const functionMap = [];

function match(str = '') {
  let state = functionMap[0]
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    state = state(char);
  }
  return state === end;
}

function end() {
  return end;
}

function getProcessFunc(i, char) {
  const f = function (c) {
    if (c === char) {
      return i === (functionMap.length - 1)
        ? end
        : functionMap[i + 1]
    } else {
      if (i === 0) {
        return functionMap[0]
      } else {
        return functionMap[0](c);
      }
    }
  }
  f.name = `${i}:${char}`
  return f;
}

for (let i = 0; i < target.length; i++) {
  const char = target.charAt(i);
  functionMap.push(getProcessFunc(i, char));
}

const testCase = [
  'abcabx1',
  '0abcabx',
  '0abcabx1',
  'ababcabx',
  'abcabcabcabx',
  'abcbabcabcabx',
]

testCase.forEach(str => {
  console.log(
    `match('${str}'):\t ${str.includes(target)} => ${match(str)}`
  )
})
