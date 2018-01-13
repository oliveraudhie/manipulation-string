// level 0
const a = 'hello'
const b = 'world'
console.log(a);
console.log(b);
// level 1
const c = a + 'sih' + b
const d = `${a} ${b}`
// level 2
console.log(a.toUppercase());
console.log(b.toUppercase());
// level 3
function titleCase(str) {
  str = str.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}

console.log(titleCase("haLoHelo"))