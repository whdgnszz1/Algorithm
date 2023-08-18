function solution(strings, n) {
    strings = strings.sort((a, b) => {
        if (a[n] < b[n] ) {
            return -1;
        } else if (a[n] > b[n]) {
            return 1;
        } else {
            if (a < b) {
                return -1
            } else {
                return 1
            }
        }
    })
    return strings
}















//   return strings.sort((a, b) => {
//     if (a[n] > b[n]){
//         return 1;
//     } else if (a[n] < b[n]) {
//         return -1;
//     } else {
//         return a > b ? 1 : -1;
//     } 
//   });
// }

//     strings.sort(function comparefunction(a,b) {
//                  let pre = a[n]
//                  let rear = b[n]
//                  if( pre === rear) {
                     
//                  }
//                  })
// }
//     let arr = strings.sort()
//     let newArr = []
//     for(i = 0 ; i < strings.length ; i ++) {
//         newArr.push(arr[i].split("").splice(n,arr[i].length).join(""))
//     }
    
//     newArr.sort()
//     console.log(newArr)
//     for ( j = 0; j < strings.length; j++) {
//         for ( k = 0 ; k < newArr.length; k++) {
//             if(newArr[j] === strings[k].split("").slice(n, strings[k].length).join("")) {
//                 newArr[j] = strings[k]
//             }
//         }
//     }
//     return newArr
// }
//     let arr = strings.sort()
//     console.log(arr)
//     let newArr = []
//     for (i = 0 ; i < strings.length; i++) {
//         newArr.push(strings[i].slice(n, strings[i].length))
//     }
//     newArr.sort()
//     console.log(newArr)
//     for ( j = 0; j < strings.length; j++) {
//         for ( k = 0 ; k < newArr.length; k++) {
//             if(newArr[j] === strings[k].split("").slice(n, strings[k].length).join("")) {
//                 newArr[j] = strings[k]
//             }
//         }
//     }

//     return newArr
// }
//     var arr = [];
//     let newArr = strings.sort().map(v => v.split("").splice(n,v.length).join(""))
//     let copyArr = [...newArr]
//     console.log(strings.sort())
//     console.log(newArr)
//     let newArr2 = newArr.sort()
//     console.log(newArr2)
        
//     for ( i = 0; i < strings.length; i++) {
//         for (let j = 0 ; j < newArr2.length; j++) {
//             if (newArr2[i] === strings[j].split("").slice(n, strings[j].length).join("") ) {
//                 newArr2[i] = strings[j]
//             }
//         }
//     }
//     return newArr2
// }
    // console.log(newArr)
    // for(let i = 0; i < newArr.length-1; i++) {
    //    if( newArr[i].localeCompare(newArr[i+1]) === 1) {
    //        newArr[i+1] = copyArr[i]
    //        newArr[i] = copyArr[i+1]
    //        copyArr = [...newArr]
    //        i--
    //    }
    // }
    // console.log(newArr)
    // for ( i = 0; i < strings.length; i++) {
    //     for (let j = 0 ; j < newArr.length; j++) {
    //         if (newArr[i] === strings[j].split("").slice(n, strings[j].length).join("") ) {
    //             newArr[i] = strings[j]
    //         }
    //     }
    // }
//     return newArr
// }


       
    // let newArr = strings.map(v => v.split("").splice(n,v.length).join("")).sort()
    // console.log(newArr)
    // for (let i = 0; i < strings.length; i++) {
        // for (let j = 0 ; j < newArr.length; j++) {
        //      if (newArr[i] === strings[j].split("").slice(n, strings[j].length).join("") ) {
        //          newArr[i] = strings[j]
        //      }
        // }
    // }
    // return newArr;
// }
//     let answer = []
//     let overlap = []
//     for(i = 0; i < strings.length; i++) {
//         arr.push(strings[i].split("")[n])
//     }
//     arr.sort()
//     for ( j = 0 ; j < strings.length; j++) {
//         for(k = 0; k < strings.length; k++) {
//             if(arr[j] === strings[k].split("")[n]) {
//                 arr[j] = strings[k]
//             }
//         }
 
//     }
//     const set = new Set(arr)
//     if(set.length < arr.length) {
//         overlap.push(strings[i].split("")[n])
//     }
