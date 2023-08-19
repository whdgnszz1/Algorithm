function solution(food) {
  let answer = '';
  let str =``;
  let arr =[];
  //[[0,1],[1,3],[2,4],[3,6]];

  food.forEach((x,i)=>{
    if(i>=1){
      arr.push([i,parseInt(x/2)]);
    }

  })
  arr.forEach((x)=>{
    str+=String(x[0]).repeat(x[1]);
  })
  
  return `${str}0${str.split('').reverse().join('')}`;
}