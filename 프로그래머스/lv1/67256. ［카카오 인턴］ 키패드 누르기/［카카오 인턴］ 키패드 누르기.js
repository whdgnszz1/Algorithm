function solution(numbers, hand) {
    var answer = '';
    let curLeftHeight = 4;
    let curLeftLoc = 1;
    let curRightHeight = 4;
    let curRightLoc = 1;

    for(i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 2 || numbers[i] === 3 ) {
            console.log(1)
            if(numbers[i] === 1) {
                answer+= "L"
                curLeftHeight = 1
                curLeftLoc = 1
            } else if(numbers[i] === 3) {
                answer+= "R"
                curRightHeight = 1
                curRightLoc = 1
            } else {
                if (curRightLoc + Math.abs(curRightHeight - 1) > curLeftLoc + Math.abs(curLeftHeight - 1)) {
                    answer += "L"
                    curLeftLoc = 0
                    curLeftHeight = 1
                } else if (curRightLoc + Math.abs(curRightHeight - 1) < curLeftLoc + Math.abs(curLeftHeight - 1)) {
                    answer += "R"
                    curRightLoc = 0
                    curRightHeight = 1
                } else {
                    if (hand === "right") {
                        answer += "R"
                        curRightLoc = 0
                        curRightHeight = 1                        
                    } else {
                        answer += "L"
                        curLeftLoc = 0
                        curLeftHeight = 1                        
                    }
                }
            }
        } else if (numbers[i] === 4 || numbers[i] === 5 || numbers[i] === 6) {
            console.log(2)
            if(numbers[i] === 4) {
                answer+= "L"
                curLeftHeight = 2
                curLeftLoc = 1
            } else if(numbers[i] === 6) {
                answer+= "R"
                curRightHeight = 2
                curRightLoc = 1
            } else {
    
                if (curRightLoc + Math.abs(curRightHeight - 2) > curLeftLoc + Math.abs(curLeftHeight - 2)) {
                    answer += "L"
                    curLeftLoc = 0
                    curLeftHeight = 2
                } else if (curRightLoc + Math.abs(curRightHeight - 2) < curLeftLoc + Math.abs(curLeftHeight - 2)) {
                    answer += "R"
                    curRightLoc = 0
                    curRightHeight = 2
                } else {
                    if (hand === "right") {
                    answer += "R"
                    curRightLoc = 0
                    curRightHeight = 2                        
                    } else {
                    answer += "L"
                    curLeftLoc = 0
                    curLeftHeight = 2                        
                    }
                }
            }            
        } else if (numbers[i] === 7 || numbers[i] === 8 || numbers[i] === 9) {
            console.log(3)
            if(numbers[i] === 7) {
                answer+= "L"
                curLeftHeight = 3
                curLeftLoc = 1
            } else if(numbers[i] === 9) {
                answer+= "R"
                curRightHeight = 3
                curRightLoc = 1
            } else {
                console.log(8)
                console.log(curRightLoc + Math.abs(curRightHeight - 3), curLeftLoc + Math.abs(curLeftHeight - 3))
                if (curRightLoc + Math.abs(curRightHeight - 3) > curLeftLoc + Math.abs(curLeftHeight - 3)) {
                    answer += "L"
                    curLeftLoc = 0
                    curLeftHeight = 3
                } else if (curRightLoc + Math.abs(curRightHeight - 3) < curLeftLoc + Math.abs(curLeftHeight - 3)) {
                    answer += "R"
                    curRightLoc = 0
                    curRightHeight = 3
                } else {
                    console.log(hand)
                    if (hand === "right") {
                        answer += "R"
                        curRightLoc = 0
                        curRightHeight = 3                     
                    } else {
                        answer += "L"
                        curLeftLoc = 0
                        curLeftHeight = 3                        
                    }
                }
            }
            
        } else {
                console.log(4)
                if (curRightLoc + Math.abs(curRightHeight - 4) > curLeftLoc + Math.abs(curLeftHeight - 4)) {
                    answer += "L"
                    curLeftLoc = 0
                    curLeftHeight = 4
                } else if (curRightLoc + Math.abs(curRightHeight - 4) < curLeftLoc + Math.abs(curLeftHeight - 4)) {
                    answer += "R"
                    curRightLoc = 0
                    curRightHeight = 4
                } else {
                    if (hand === "right") {
                    answer += "R"
                    curRightLoc = 0
                    curRightHeight = 4                     
                    } else {
                    answer += "L"
                    curLeftLoc = 0
                    curLeftHeight = 4                        
                    }
                }            
        }
    }
    return answer;
}

