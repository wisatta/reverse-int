module.exports = function reverse (n) {
  let x = Math.abs(n);
  let str = String(x);
  let i = 0;
  let result = '';
  while (i < str.length){
    result = `${str[i]}${result}`;
    i = i + 1;
  }
  return result;
}
