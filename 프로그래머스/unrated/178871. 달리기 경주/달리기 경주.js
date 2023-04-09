function solution(players, callings) {
    let name = new Map();
    let score = new Map();

    players.map((player, index) => {
        name.set(player, players.length - index);
        score.set(players.length - index, player);
    });

    callings.forEach((calling) => {
        let prescore = name.get(calling) + 1;
        let prename = score.get(prescore);

        name.set(calling, prescore);
        name.set(prename, prescore - 1);
        score.set(prescore, calling);
        score.set(prescore - 1, prename);
    });

    return [...score.values()];
}


// function solution(players, callings) {
//     var answer = [];
//     let name = new Map()
//     let score = new Map()
//     let prename = ''
//     let prescore = 0
//     for (let i = 0 ; i < players.length; i++) {
//         name.set(players[i], players.length-i)
//     }
//     for (let j = 0; j < players.length; j++) {   
//         score.set(players.length-j, players[j])
//     }
//     for ( let k = 0 ; k < callings.length; k++) {
//         prescore = name.get(callings[k])+1 
//         prename = score.get(prescore)
//         // 지금 calling[k]의 위치 === prescore, calling[k]
//         name.set(callings[k], prescore)
//         name.set(prename, prescore-1)
//         score.set(prescore, callings[k])
//         score.set(prescore-1, prename)
//         // calling[k]. calling[k]의 위치
//         // prename의 위치, prename
//         // prename, prename의 위치
//     }
//     let arr = [...score.values()];
//     score.forEach((value, key, mapObject) => answer.push(value));
//     return arr
// }





// //    for (let k = 0 ; k < callings.length; k++) {
// //         rank.get(rank.get(callings[k])+1)
// //         rank.set(callings[k], rank.get(callings[k])+ 1)

// //         rank.set()
// //     }
// //     console.log(rank)