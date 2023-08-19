const solution = (s) => {
  const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  numArr.forEach((a, i)=> {
    s = s.replaceAll(a, i)
  })

  return +s
}