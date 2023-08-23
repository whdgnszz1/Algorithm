function solution(s) {
    let string = s.split('');
    let arr1 = [];
    let arr2 = [];

    let count = 0;
    for (let i = 0; string.length !== 0;) {
        if (arr1.length === 0) {
            arr1.push(string.shift());
        } else {
          if (arr1[0] === string[i]) {
              arr1.push(string.shift());
          } else {
              arr2.push(string.shift());
          }
        }
      
        if (arr1.length === arr2.length) {
            arr1 = [];
            arr2 = [];
            count++;
        }
    }

    return arr1.length !== 0 || arr2.length !== 0 ? count + 1 : count;
}
