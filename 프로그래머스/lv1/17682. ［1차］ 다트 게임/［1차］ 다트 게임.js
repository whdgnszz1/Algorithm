function solution(dartResult) {
    var answer = 0;
    let score = dartResult.match(/\d+/g).map(Number);
    console.log(score);
    
    let bonus = dartResult.match(/[A-Za-z]+/g)
    console.log(bonus);
    
    let option = Array.from({length:3})
    for(i = dartResult.length-1 ; i > 0; i--) {
        if( dartResult[i] === "#" || dartResult[i] === "*" ) {
            if(i === dartResult.length-1) {
                option[2] = dartResult[i]                
            } else if(4<=i && i<=7) {
                option[1] = dartResult[i]
            } else if (2<=i && i<=3) {
                option[0] = dartResult[i]
            } 
        }
    }
    console.log(option)
    
    let nonOption = []
    bonus.map((v,i) =>{
        if(bonus[i] === "S") {
            nonOption.push(score[i])
        } else if(bonus[i] === "D") {
            nonOption.push(Math.pow(score[i],2))            
        } else if(bonus[i] === "T") {
            nonOption.push(Math.pow(score[i],3))
        }
    })
    console.log(nonOption)
    
    if(option[2] === "*") {
        nonOption[2] = nonOption[2] * 2        
        nonOption[1] = nonOption[1] * 2
    } else if (option[2] === "#") {
        nonOption[2] = nonOption[2] * (-1)      
    }
    
    if(option[1] === "*") {
        nonOption[1] = nonOption[1] * 2        
        nonOption[0] = nonOption[0] * 2       
    } else if (option[1] === "#") {
        nonOption[1] = nonOption[1] * (-1)      
    }
    
    if(option[0] === "*") {
        nonOption[0] = nonOption[0] * 2        
    } else if (option[0] === "#") {
        nonOption[0] = nonOption[0] * (-1)      
    }
    
    return nonOption.reduce((a,b) => a + b)
}