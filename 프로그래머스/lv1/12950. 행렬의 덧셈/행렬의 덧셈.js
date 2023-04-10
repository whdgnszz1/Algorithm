function solution(arr1, arr2) {
    var answer = [[]];

    return     arr1.map((a,index1) => a.map((b, index2) => b + arr2[index1][index2] ))

}



    // for( i = 0 ; i < arr1.length ; i++) {
    //     let arr = []
    //     for (j = 0 ; j < arr1[i].length ; j++) {
    //         arr.push(arr1[i][j] + arr2[i][j])
    //     }
    //     answer.push(arr)
    // }