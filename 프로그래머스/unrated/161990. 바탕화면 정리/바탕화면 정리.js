function solution(wallpaper) {
    var answer = [];
    let minArr = wallpaper.map((a,ai) => {
        return a.split("").map((b, bi)=> {
            return b === "." ? b = [ai, bi, 0] : b = [ai, bi, 1]
        })
    })
    
    let maxArr = wallpaper.map((a,ai) => {
        return a.split("").map((b, bi)=> {
            return b === "." ? b = [ai+1, bi+1, 0] : b = [ai+1, bi+1, 1]
        })
    })
    const luxArr = new Set(minArr.map(v => v.filter(k => k[2]===1)).flat().map(l => l[0]))
    const lux = [...luxArr].sort((a,b) => a - b)[0]
    
    const luyArr = new Set(minArr.map(v => v.filter(k => k[2]===1)).flat().map(l => l[1]))
    const luy = [...luyArr].sort((a,b) => a - b)[0]

    const rdxArr = new Set(maxArr.map(v => v.filter(k => k[2]===1)).flat().map(l => l[0]))
    const rdx = [...rdxArr].sort((a,b) => b - a)[0]
    
    const rdyArr = new Set(maxArr.map(v => v.filter(k => k[2]===1)).flat().map(l => l[1]))
    const rdy = [...rdyArr].sort((a,b) => b - a)[0]
    return [lux, luy, rdx, rdy]
}