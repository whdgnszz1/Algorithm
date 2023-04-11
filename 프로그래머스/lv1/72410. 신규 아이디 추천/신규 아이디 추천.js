function solution(new_id) {
    var answer = '';
    let stage1 = new_id.toLowerCase()
    let stage2 = stage1.replace(/[^a-z0-9-_.]/g, '')
    let stage3 = stage2.replace(/\.{2,}/g, ".")
    
    if (stage3[0] === ".") {
        stage3 = stage3.substring(1)
    }
    if (stage3[stage3.length-1] === ".") {
        stage3 = stage3.slice(0,-1)
    }
    if (stage3.length === 0) {
        stage3 = "a"
    } 
    if (stage3.length >= 16) {
        stage3 = stage3.substring(0, 15)
    }
    if (stage3[stage3.length-1] === ".") {
        stage3 = stage3.slice(0,-1)
    }
    
    if (stage3.length <=2) {
        while(stage3.length <3) {
            stage3 += stage3[stage3.length-1]
        }
    }

    return stage3
}